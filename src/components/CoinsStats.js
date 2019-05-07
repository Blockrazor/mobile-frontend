import React, { Component } from 'react';
import {Platform, StatusBar} from 'react-native';
import { Tab, Tabs, TabHeading, Content, Container, Icon, Text, Header} from 'native-base';
import Overview from './CoinOverview';
import CoinFooter from './CoinFooter';
export default class CoinsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <Tabs style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
          <Tab heading={ <TabHeading><Icon name='home' /></TabHeading>}>
          <Content>
            <Overview />
          </Content>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='eye' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="logo-rss" /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='trending-up' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="chatbubbles" /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='search' /></TabHeading>}>
          </Tab>
        </Tabs>
        <CoinFooter />
      </Container>
    );
  }
}
