import React from 'react';
import {Menu, Icon} from 'antd';
const AuthenticatedMenu=({history,currentUser,signOut,...props})=>{
    
    return(<Menu
        theme='dark'
        mode='horizontal'
        style={{ lineHeight: '64px', float: `right` }}
      >
        {currentUser&&<Menu.Item key='1' onClick={()=>{
          signOut()
        }}><Icon type='logout' />Logout</Menu.Item>}
        {!currentUser&&<Menu.Item key='1' onClick={()=>{
          history.push('/login')
        }}><Icon type='login' />Login</Menu.Item>}
        {!currentUser&&<Menu.Item key='2' onClick={()=>{
          history.push('/register')
        }}><Icon type='form' />Register</Menu.Item>}
      </Menu>)
}

export default AuthenticatedMenu