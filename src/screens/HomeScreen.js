import React, { Component} from 'react';
import {Platform} from 'react-native';
import { Tab, Tabs, TabHeading, Container, Icon, Text, ScrollableTab, Button} from 'native-base';
import Overview from '../components/Coin_Stats/CoinOverview';
import News from '../components/Coin_Stats/CoinNews';
import Comment from '../components/Coin_Stats/CoinComment';
import CoinFooter from '../components/Coin_Stats/CoinFooter';
import CoinHeader from '../components/Coin_Stats/CoinHeader';
import Price from '../components/Coin_Stats/CoinPrice';
import AppStyle from "../components/AppStyle";
import AllCoins from '../components/AllCoins';

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
        <CoinHeader navigation={this.props.navigation}/>
          <Tabs 
            style={
              Platform.OS === 'android' ? { overflow: 'hidden', 
              //marginTop: getStatusBarHeight() 
              } : {
              //marginTop: getStatusBarHeight()
              }
            }
            //renderTabBar={()=> <ScrollableTab />}
            onChangeTab={({i}) => this.setState({currentPage: i})} 
            //ref={(c) => { this.tabs = c; return; }} initialPage={1}
            >
          <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name='eye' /></TabHeading>} >
            <Overview />
          </Tab>
          <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name="ios-paper" /></TabHeading>}>
            <News />
          </Tab>
          <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name='trending-up' /></TabHeading>}>
            <Price />
          </Tab>
          <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name="chatbubbles" /></TabHeading>}>
            <Comment />
          </Tab>
          {/* <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name='search' /></TabHeading>}>
            <AllCoins navigation={this.props.navigation}/>
          </Tab> */}
          {/* <Tab heading={ <TabHeading style={AppStyle.tabDark}><Icon name='albums' /></TabHeading>}>
            <Wall />
          </Tab>  */}
        </Tabs>
        {this._footer()}
      </Container>
    );
  }
}