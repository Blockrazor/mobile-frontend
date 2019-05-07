import React, { Component } from './node_modules/react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer } from 'native-base';


export default class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Card>
                <CardItem header>
                    <Text>Bitcoin (BTC) Consolidates Within the $5,700 Region </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                        At the time of writing, Bitcoin is trading down just under 1% at its current price of $5,730, down slightly from its 24-hour highs of $5,830 which were set late yesterday.

Over a one-week period BTC has been able to surge from lows of roughly $5,200 to ...
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}