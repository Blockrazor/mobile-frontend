import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Body, Right, Icon, Title } from 'native-base';
import AndroidBack from  '../../components/AndroidBack';
import LoginHeader from '../../components/Header';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", error: "", loading: false };
    }

    onLoginPress() {
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <ActivityIndicator />;
        }
        return (
            <View>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("Forgot")}
                >
                    <Text note>Forgot your Password?</Text>
                </Button>
                <Button transparent onPress={this.onLoginPress.bind(this)}>
                    <Text>Login</Text>
                </Button>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("SignUp")}
                >
                    <Text>Sign Up</Text>
                </Button>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <AndroidBack navigation={this.props.navigation} />
                <LoginHeader title="Login" navigation={this.props.navigation} dest="Main"/>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={email => this.setState({ email: email })}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                value={this.setState.password}
                                onChangeText={password => this.setState({ password: password })}
                            />
                        </Item>
                    </Form>
                    {this.renderButtonOrLoading()}
                </Content>
            </Container>
        );
    }
}