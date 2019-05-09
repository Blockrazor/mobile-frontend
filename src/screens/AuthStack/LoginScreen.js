import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import LoginHeader from '../../components/Login/LoginHeader'
export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <LoginHeader title="Login" navigation={this.props.navigation}/>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button transparent>
            <Text note>Forgot your Password?</Text>
          </Button>
          <Button transparent>
            <Text>Login</Text>
          </Button>
          <Button transparent>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}