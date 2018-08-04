import React, { Component } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { Wrapper, Title, Button } from '../style/styled';
import '../style/style.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Simple and fast React / Redux HMR starter.</Title>
        <p>Made by <a href="https://github.com/varxyz">varxyz</a></p>
      </Wrapper>
    );
  }
}

export default hot(module)(App);
