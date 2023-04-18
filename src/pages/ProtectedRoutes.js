import React, { Component } from 'react'
import {Redirect,  Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default class ProtectedRoutes extends Component {
    render() {
    let token = localStorage.getItem('accessToken');
        try {
            let tokenData = jwtDecode(token);
            if (token) {
            if (tokenData.role === 'ROLE_CUSTOMER') {
                if ( this.props.path === '/overload' || this.props.path === '/courses' || this.props.path === '/addcourse' || this.props.path === '/products'|| this.props.path === '/tasks' || this.props.path === '/addtask'|| this.props.path === '/employeetasks') {
                    return (<Redirect to='/'/>)
                } else {
                   return (<Route path={this.props.path} component={this.props.component} />)
                }
            } else if (tokenData.role === 'ROLE_MANAGER') {
                if ( this.props.path === '/customerproducts' || this.props.path === '/addproduct' || this.props.path === '/overload' || this.props.path === '/courses' || this.props.path === '/employeetasks' ) {
                    return (<Redirect to='/'/>)
                } else {
                   return (<Route path={this.props.path} component={this.props.component} />)
                }
                }else if (tokenData.role === 'ROLE_EMPLOYEE') {
                if ( this.props.path === '/customerproducts' || this.props.path === '/addproduct' || this.props.path === '/products' || this.props.path === '/addcourse' || this.props.path === '/tasks') {
                    return (<Redirect to='/'/>)
                }
                 else {
                   return (<Route path={this.props.path} component={this.props.component} />)
                }
                }else if (tokenData.role === 'ROLE_ADMIN') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                }
                
            }
            else {
            return (
                <Redirect to='/'/>
            )
            }
        } catch (error) {
            localStorage.clear()
            return (
                <Redirect to='/'/>
            )
        }
    }
}