import React, { Component } from 'react';
import { View } from 'react-native';
import { Content} from 'native-base';
import PriceCard from './Overview/PriceCard';
import SummaryCard from './Overview/SummaryCard';
import TopCommentCard from './Overview/TopCommentCard';
import NewsCard from './Overview/NewsCard';

export default class CoinsOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Content>
        <PriceCard />
        <SummaryCard />
        <TopCommentCard />
        <NewsCard />
      </Content>
    );
  }
}
