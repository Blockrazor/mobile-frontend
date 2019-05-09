import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer, FooterTab } from 'native-base';
import AppStyle from "../AppStyle";

export default class CointFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Footer>
            <FooterTab style={AppStyle.footerLight}>
            <Button full>
                <Icon name='close-circle' style={{color: '#d9534f' }}/>
              </Button>
              <Button full>
                <Icon name='checkmark-circle' style={{color: '#5cb85c'}}/>
              </Button>
            </FooterTab>
            </Footer>
        );
    }
}
