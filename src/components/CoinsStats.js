import React, { Component } from 'react';
import { View, Image, Platform, StatusBar } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer ,FooterTab,} from 'native-base';
import CoinHeader from './CoinHeader';
import PriceCard from './PriceCard';
import SummaryCard from './SummaryCard';
import CommentCard from './CommentCard';
import NewsCard from './NewsCard';
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
        <CoinHeader />
        <Content>
          <PriceCard />
          <SummaryCard />
          <CommentCard />
          <NewsCard />
        </Content>
        <CoinFooter />
      </Container>
    );
  }
}
