import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer, FooterTab } from 'native-base';


export default class CointFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Footer>
            <FooterTab>
            <Button full>
                <Icon name='heart-dislike'/>
              </Button>
              <Button full>
                <Icon name='heart'/>
              </Button>
            </FooterTab>
            </Footer>
        );
    }
}