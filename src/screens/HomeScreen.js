import React, { Component} from 'react';
import {Platform, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Tab, Tabs, TabHeading, Content, Container, Icon, Text, Header, ScrollableTab} from 'native-base';
import Overview from '../components/Coin_Stats/CoinOverview';
import News from '../components/Coin_Stats/CoinNews';
import Comment from '../components/Coin_Stats/CoinComment';
import Wall from '../components/Coin_Stats/CoinWall';
import CoinFooter from '../components/Coin_Stats/CoinFooter';
import Search from '../components/Coin_Stats/CoinSearch';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: 0}
  }

  _footer() {
    if(this.state.currentPage == 0 ||this.state.currentPage == 1 ||this.state.currentPage == 2 ||this.state.currentPage == 3 ){
      return <CoinFooter />
    }
    else{
      return
    }
  }

  render() {
    return (
      <Container>
          <Tabs 
            style={{
            marginTop: getStatusBarHeight()}}
            renderTabBar={()=> <ScrollableTab />}
            onChangeTab={({i}) => this.setState({currentPage: i})} 
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
            <Search />
          </Tab>
          <Tab heading={ <TabHeading><Icon name='albums' /></TabHeading>}>
            <Wall />
          </Tab>
          <Tab heading={ <TabHeading><Icon name='contact' /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name='information-circle' /></TabHeading>}>
          </Tab>
        </Tabs>
        {this._footer()}
      </Container>
    );
  }
}