import React, { Component } from 'react';
import { AndroidBackHandler } from 'react-navigation-backhandler';

export default class AndroidBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onBackButtonPressAndroid = () => {
        if (this.props.navigation.state.routeName == "About" ||this.props.navigation.state.routeName == "Forgot" ||this.props.navigation.state.routeName == "SignUp" ) {
            this.props.navigation.goBack();
            return true;
        }
        if(this.props.navigation.state.routeName == "Login")
        {
            this.props.navigation.navigate("Main");
            return true;
        }
        return false;
    };
    render() {
        return (
            <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid} />
        );
    }
}
