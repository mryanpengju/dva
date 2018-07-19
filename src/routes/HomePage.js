import React,{Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import { WingBlank, WhiteSpace, List, InputItem, Icon, Button} from 'antd-mobile';
import {loggedIn} from '../utils/fetch';


@connect(state => ({
  user: state.user,
}))
export default class HomePage extends Component {

	componentWillMount(){
		const { dispatch } = this.props;
		const user = loggedIn();
		if(!user){
			dispatch(routerRedux.push({pathname: '/login'}));
		}
	}


	render(){
		const { user } = this.props.user;
	    return (
	      <div>
	  		<h1>{user.username}</h1>
	      </div>
	    );
  	}
}
