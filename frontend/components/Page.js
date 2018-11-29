import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from '../components/Meta'
import styled from 'styled-components';

const MyButton = styled.button `
  background-color: red;
  font-size: 40px;
  span {
    color: yellow;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>My Button<span>:poop</span></MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page;
