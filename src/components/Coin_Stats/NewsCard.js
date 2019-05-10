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
                <Card button onPress={() => alert("Check details")}>
                    <CardItem header>
                        <Left>
                            <Thumbnail source={{ uri: this.props.img }} />
                            <Body>
                                <Text>{this.props.title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem button onPress={() => alert("Check details")} onLongPress={() => alert("Remove")}>
                        <Text note>{this.props.content}</Text>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
