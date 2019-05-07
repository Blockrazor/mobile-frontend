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
                <Card>
                    <CardItem style={{ backgroundColor: this.props.color }}>
                        <Body>
                            <Text>
                                {this.props.comment}
                        </Text>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button transparent>
                                    <Icon name='thumbs-up' style={{ color: '#ffffff' }} />
                                </Button>
                                <Text>
                                    {Math.floor(Math.random() * 100) + 1}
                            </Text>
                                <Text>      </Text>
                                <Button transparent>
                                    <Icon name='thumbs-down' style={{ color: '#ffffff' }} />
                                </Button>
                                <Text>
                                    {Math.floor(Math.random() * 100) + 1}
                            </Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
        );
    }
}
