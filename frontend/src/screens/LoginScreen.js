import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelecctor } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = () => {
  return (
    <div>
      <h2>This is the</h2>
      <h1>Login Screen</h1>
    </div>
  );
};

export default LoginScreen;
