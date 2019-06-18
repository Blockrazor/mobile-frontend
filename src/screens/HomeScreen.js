import React, { Component } from "react";
import { Platform, ActivityIndicator } from "react-native";
import {
  Tab,
  Tabs,
  TabHeading,
  Container,
  Icon,
  Text,
  ScrollableTab,
  Button
} from "native-base";
import Overview from "../components/Coin_Stats/CoinOverview";
import News from "../components/Coin_Stats/CoinNews";
import Comment from "../components/Coin_Stats/CoinComment";
import CoinFooter from "../components/Coin_Stats/CoinFooter";
import CoinHeader from "../components/Coin_Stats/CoinHeader";
import Price from "../components/Coin_Stats/CoinPrice";
import AppStyle from "../components/AppStyle";
import { connect } from "react-redux";
import { setCurrency, getCurrencies } from "../redux/app-redux";

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currency => {
      dispatch(setCurrency(currency));
    },
    getCurrencies: () => {
      dispatch(getCurrencies());
    }
  };
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, currency: {} };
    if (this.props.currency.currencyName == undefined) {
      this.props.getCurrencies();
    }
  }

  _footer() {
    if (
      this.state.currentPage == 0 ||
      this.state.currentPage == 1 ||
      this.state.currentPage == 2 ||
      this.state.currentPage == 3
    ) {
      return <CoinFooter />;
    } else {
      return;
    }
  }

  render() {
    return (
      <Container>
        <CoinHeader navigation={this.props.navigation} />
        <Tabs
          style={Platform.OS === "android" ? { overflow: "hidden" } : {}}
          onChangeTab={({ i }) => this.setState({ currentPage: i })}
          ref={(c) => { this.tabs = c; return; }}
        >
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Icon name="eye" />
              </TabHeading>
            }
          >
            <Overview navigation={this.props.navigation} tabs={this.tabs}/>
          </Tab>
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Icon name="ios-paper" />
              </TabHeading>
            }
          >
            <News />
          </Tab>
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Icon name="trending-up" />
              </TabHeading>
            }
          >
            <Price navigation={this.props.navigation}/>
          </Tab>
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Icon name="chatbubbles" />
              </TabHeading>
            }
          >
            <Comment navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
        {this._footer()}
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // withTracker(params => {
  //   const handle = Meteor.subscribe("approvedcurrencies");

  //   return {
  //     dataReady: handle.ready()
  //   };
  // })
  HomeScreen
);
