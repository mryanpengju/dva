import React,{Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import styles from './IndexPage.css';
import { WingBlank, WhiteSpace, List, InputItem, Icon, Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import * as user from '../services/user'
import {login} from '../utils/fetch';


@connect(state => ({
  user: state.user,
}))
@createForm()
export default class IndexPage extends Component {
  
  state = {
    username:"",
    password:"",
    loading:false,
    disabled:true, 
  }

  imputUsername(value){
    if(value!=""&&this.state.password!=""){
      this.setState({username:value,disabled:false});
    }else{
      this.setState({username:value,disabled:true});
    }
  }

  imputPassword(value){
    if(this.state.username!=""&&value!=""){
      this.setState({password:value,disabled:false});
    }else{
      this.setState({password:value,disabled:true});
    }
  }

  async loginClick(){
    this.setState({loading:true,disabled:true});
    const {dispatch} = this.props;
    const value =await user.login({username:this.state.username,password:this.state.password});
    if(value.code==1){
      dispatch({
        type: 'user/getUser',
        payload: {
          user:value.data
        }
      });
      dispatch(routerRedux.push({pathname: '/'}));
      login(this.state.username,this.state.password);
    }else{
      this.setState({loading:false,disabled:false});
    }
  }

  render(){
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.normal}>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <h1 className={styles.title}>Welcome to Juge!</h1>
          <WhiteSpace size='xl'/>
          <WingBlank>
            <List>
              <InputItem
                {...getFieldProps('username')}
                placeholder="请输入您的账号"
                clear
                onChange={this.imputUsername.bind(this)}
                value={this.state.username}
              >
                <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
            </List>
             <WhiteSpace size='lg'/>
            <List >
              <InputItem
                {...getFieldProps('password')}
                type="password"
                placeholder="请输入您的密码"
                clear
                onChange={ this.imputPassword.bind(this) }
                value={this.state.password}
              >
                <Icon type="search" size='md' />
              </InputItem>
            </List>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <Button type="primary" loading={this.state.loading} disabled={this.state.disabled} onClick={this.loginClick.bind(this)} >登录</Button>
          </WingBlank> 
      </div>
    );
  }
}
