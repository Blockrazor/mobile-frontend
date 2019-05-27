import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Search from '../components/Coin_Stats/CoinSearch';
import NormalHeader from '../components/Header';
import { Container } from 'native-base';
import AllCoins from '../components/AllCoins';
export default class WallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <NormalHeader title="Search" navigation={this.props.navigation}/>
            <AllCoins navigation={this.props.navigation} />
        </Container>

    );
  }
}
