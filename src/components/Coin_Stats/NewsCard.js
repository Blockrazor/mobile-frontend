import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer, List } from 'native-base';

export default class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Card>
                    <CardItem header>
                        <Left>
                            <Thumbnail source={{ uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' }} />
                            <Body>
                                <Text>{this.props.title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Text note>{this.props.content}</Text>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
