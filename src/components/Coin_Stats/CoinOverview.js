import React, { Component } from 'react';
import { View } from 'react-native';
import PriceCard from './Overview/PriceCard';
import SummaryCard from './Overview/SummaryCard';
import CommentCard from './Overview/CommentCard';
import NewsCard from './Overview/NewsCard';
export default class CoinsOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
          <PriceCard />
          <SummaryCard />
          <CommentCard />
          <NewsCard />
        </View>
    );
  }
}
