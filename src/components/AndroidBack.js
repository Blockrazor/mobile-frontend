import React, { Component } from 'react';
import { AndroidBackHandler } from 'react-navigation-backhandler';

export default class AndroidBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onBackButtonPressAndroid = () => {
        if(this.props.navigation.state.routeName == "Login")
        {
            this.props.navigation.navigate("Main");
            return true;
        }
        else{
            this.props.navigation.goBack();
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
