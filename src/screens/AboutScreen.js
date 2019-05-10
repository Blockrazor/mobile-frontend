import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import AboutHeader from '../components/About/AboutHeader';
import AndroidBack from  '../components/AndroidBack';
import { Constants, WebBrowser } from 'expo';

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
                                <Thumbnail square source={require('../assets/images/logo/deepBloqLogo.jpg') } />
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
                                A non profit, community owned blockchain analysis project. We have an international network of Blockchain technology and financial service. 
We are a group which would like to make use of the international network 
and provide consulting service to the worldwide.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                In a world filled with inequality, we discover new ways of equality, in order to make the world a better place.
                            </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>GitHub</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }} onPress={()=>{ WebBrowser.openBrowserAsync('https://github.com/Blockrazor/mobile-frontend'); }}>
                                    <Icon name="logo-github" />
                                    <Text>197 stars</Text>
                                </Button>
                            </Left>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
