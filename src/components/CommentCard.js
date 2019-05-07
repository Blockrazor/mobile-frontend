import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer } from 'native-base';


export default class CommentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Card>
                <CardItem style={{ backgroundColor: "#e0d1d1" }}>
                    <Body>
                        <Text>
                            This might change with the launch of Bitcoin trading by Fidelity.
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button transparent>
                                <Icon name='thumbs-up' style={{color: '#ffffff'}}/>
                            </Button>
                            <Text>
                                238
                            </Text>
                            <Text>      </Text>
                            <Button transparent>
                                <Icon name='thumbs-down' style={{color: '#ffffff'}}/>
                            </Button>
                            <Text>
                                2
                            </Text>
                        </View>
                    </Body>
                </CardItem>
                <CardItem style={{ backgroundColor: "#d1e0d9" }}>
                    <Body>
                        <Text>
                            We believe, with advancements in technology, gradually, most people will realize the potential of cryptocurrencies and blockchain technology. Until then, pockets of opposition is to be expected.
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button transparent>
                                <Icon name='thumbs-up' style={{color: '#ffffff'}}/>
                            </Button>
                            <Text>
                                102
                            </Text>
                            <Text>      </Text>
                            <Button transparent>
                                <Icon name='thumbs-down' style={{color: '#ffffff'}}/>
                            </Button>
                            <Text>
                                5
                            </Text>
                        </View>
                    </Body>

                </CardItem>
            </Card>
        );
    }
}
