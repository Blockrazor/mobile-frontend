import React, { Component } from 'react';
import { View } from 'react-native';
import PriceCard from './PriceCard';
import SummaryCard from './SummaryCard';
import CommentCard from './CommentCard';
import NewsCard from './NewsCard';
export default class CoinsStats extends Component {
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
