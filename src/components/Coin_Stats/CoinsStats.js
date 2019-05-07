import React, { Component } from 'react';
import {Platform, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Tab, Tabs, TabHeading, Content, Container, Icon, Text, Header} from 'native-base';
import Overview from './CoinOverview';
import News from './CoinNews';
import CoinFooter from './CoinFooter';
export default class CoinsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // componentDidMount() {
  //   setTimeout(this.tabs.goToPage.bind(this.tabs, 1));
  // }

  render() {
    return (
      <Container>
          <Tabs style={{
            marginTop: getStatusBarHeight()}} 
            //ref={(c) => { this.tabs = c; return; }} initialPage={1}
            >
          <Tab heading={ <TabHeading><Icon name='eye' /></TabHeading>}>
          <Content>
            <Overview />
          </Content>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="logo-rss" /></TabHeading>}>
          <Content>
            <News />
          </Content>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='trending-up' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="chatbubbles" /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='search' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='albums' /></TabHeading>}>
          </Tab>
        </Tabs>
        <CoinFooter />
      </Container>
    );
  }
}
