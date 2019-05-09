import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import AboutHeader from '../components/About/AboutHeader';
import AndroidBack from  '../components/AndroidBack';

export default class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }  

    render() {
        return (
            <Container>
                <AndroidBack navigation={this.props.navigation}/>
                <AboutHeader navigation={this.props.navigation} />
                <Content>
                    <List style={{ flex: 0 }}>
                        <ListItem>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://www.gannett-cdn.com/-mm-/15c2ce3e0bbadba03bbcdc762ff5c40c4a915fec/c=0-29-580-355/local/-/media/2018/11/19/USATODAY/usatsports/MotleyFool-TMOT-c77f5cc8-bitcoin-gbtc_large.jpg?width=3200&height=1680&fit=crop' }} />
                                <Body>
                                    <Text>deepBloq</Text>
                                    <Text></Text>
                                    <Text note>version: 1.0.1</Text>
                                </Body>
                            </Left>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>About deepBloq</Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                we are a non profit blockchain analysis bla blablablablablabla ablablabl
                                on profit blockchain analysis bla blablablablablabla ababla ablablabla
                                bla
                            </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>GitHub</Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                we are opensource project bla bla bla bla bla bla
                                versio
                                opensource project bla bl
                                opensource project bla bl
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1231 stars</Text>
                                </Button>
                            </Left>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
