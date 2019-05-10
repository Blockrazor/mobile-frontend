import React, { Component } from 'react';
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
                    <Text>Cardano (ADA) Offers Investors Significant Discount Following Latest Skid </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                        Cardano (ADA), the blockchain for complex programmable transfers, is currently mired in a month-long losing skid over concerns that the development road map is facing considerable delays. The highly touted Shelley upgrade is more than a month past due, leaving many questions about the network’s future unanswered.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}