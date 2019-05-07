import React, { Component} from 'react';
import {Platform, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Tab, Tabs, TabHeading, Content, Container, Icon, Text, Header} from 'native-base';
import Overview from '../components/Coin_Stats/CoinOverview';
import News from '../components/Coin_Stats/CoinNews';
import Comment from '../components/Coin_Stats/CoinComment';
import Wall from '../components/Coin_Stats/CoinWall';
import CoinFooter from '../components/Coin_Stats/CoinFooter';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Container>
          <Tabs style={{
            marginTop: getStatusBarHeight()}}
            //ref={(c) => { this.tabs = c; return; }} initialPage={1}
            >
          <Tab heading={ <TabHeading><Icon name='eye' /></TabHeading>}>
            <Overview />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="logo-rss" /></TabHeading>}>
            <News />
          </Tab>
          <Tab heading={ <TabHeading><Icon name='trending-up' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="chatbubbles" /></TabHeading>}>
            <Comment />
          </Tab>
          <Tab heading={ <TabHeading><Icon name='search' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='albums' /></TabHeading>}>
            <Wall />
          </Tab>
        </Tabs>
        <CoinFooter />
      </Container>
    );
  }
}