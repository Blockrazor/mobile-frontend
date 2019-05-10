import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Wall from '../components/Coin_Stats/CoinWall';
import NormalHeader from '../components/Header';
import { Container } from 'native-base';
export default class WallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <NormalHeader title="Wall" navigation={this.props.navigation}/>
            <Wall />
        </Container>

    );
  }
}
