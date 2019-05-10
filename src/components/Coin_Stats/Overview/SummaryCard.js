import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer } from 'native-base';


export default class SummaryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Card>
                <CardItem bordered>
                    <Body>
                        <Text>
                        Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is reportedly the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach, and one                 </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}