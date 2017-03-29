import React, { Component } from 'react';
import { connect } from 'dva';
import LoginForm from './LoginForm';

function Login({ dispatch }){

  function checkUser(values) {
    console.log('checkUser...');
    dispatch({
      type: 'login/userlogin',
      payload: values,
    });
  }

  return (
    <LoginForm onSubmit={checkUser} />
  );
}

export default connect()(Login);
