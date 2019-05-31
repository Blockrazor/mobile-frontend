import React, { Component } from 'react';
import { View , ActivityIndicator} from 'react-native';
import PriceCard from './Overview/PriceCard';
import SummaryCard from './Overview/SummaryCard';
import TopCommentCard from './Overview/TopCommentCard';
import NewsCard from './Overview/NewsCard';
import {Content} from 'native-base';
import { connect } from "react-redux";

class CoinsOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.currency.currencyName == undefined) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Content>
        <PriceCard navigation={this.props.navigation}/>
        <SummaryCard navigation={this.props.navigation}/>
        <TopCommentCard navigation={this.props.navigation}/>
        <NewsCard navigation={this.props.navigation}/>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  CoinsOverView
);