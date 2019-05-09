import React, { Component } from "react";
import { View, ActivityIndicator, Platform, StatusBar } from "react-native";
import {
    Content,
    Container,
    Form,
    Input,
    Header,
    Left,
    Body,
    Right,
    Title,
    Item,
    Label,
    Button,
    Text,
    Icon
} from "native-base";
import LoginHeader from '../../components/Login/LoginHeader';
import AndroidBack from  '../../components/AndroidBack';

export default class ForgotScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: "",
            loading: false
        };
    }
    onForgotPress() {

    }

    renderButtonOrLoading() {
        //loading
        if (this.state.loading) {
            return <ActivityIndicator />;
        }
        //not filled yet
        if (this.state.email == "") {
            return (
                <View>
                    <Button transparent disabled>
                        <Text>Send Password Reset Email</Text>
                    </Button>
                </View>
            );
        }
        //everything is ok
        return (
            <View>
                <Button transparent onPress={this.onForgotPress.bind(this)}>
                    <Text>Send Password Reset Email</Text>
                </Button>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <AndroidBack navigation={this.props.navigation} />
                <LoginHeader title="Forgot Password" navigation={this.props.navigation} />
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={email => this.setState({ email: email })}
                            />
                        </Item>
                    </Form>
                    <Text />
                    <Text />
                    {this.renderButtonOrLoading()}
                </Content>
            </Container>
        );
    }
}