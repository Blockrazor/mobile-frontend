import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import AndroidBack from "../components/AndroidBack";
import CoinHeader from "../components/Header";
import Meteor, {
  withTracker,
  MeteorComplexListView,
  ReactiveVar
} from "react-native-meteor";
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Card,
  CardItem,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Title
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class CoinSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  _vote = (summary, position)=>{
    Meteor.call('vote', 'Summaries', summary._id , position, (error, data) => {
			if(!error) {
      } else 
      {
      };
		});

  }

  _renderRow = (summary) => {
      var downVote = 0;
      if (summary.downVoted != undefined) {
        downVote = summary.downVoted.length;
      }
      if (summary.appealVoted != undefined) {
        appealVote = summary.appealVoted.length;
      }
      return (
        <Card>
          <CardItem bordered>
            <Grid>
              <Row>
                <Text note>{summary.author}</Text>
                </Row>
                <Row>
                <Text>{summary.summary}</Text>
                </Row>
                <Row style={{alignItems:'center', justifyContent:'flex-start'}}>
                <Button transparent onPress={()=>{this._vote(summary, "up")}}>
                  <Icon name="thumbs-up" style={{ color: "#000000" }} />
                </Button>
                <Text>{appealVote}</Text>
                <Button transparent style={{ marginLeft: 40 }} onPress={()=>{this._vote(summary, "down")}}>
                  <Icon name="thumbs-down" style={{ color: "#000000" }} />
                </Button>
                <Text>{downVote}</Text>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      );
  }

  render() {
    if (!this.props.dataReady) {
      return (
        <Container>
          <AndroidBack navigation={this.props.navigation} />
          <CoinHeader title="Summary" navigation={this.props.navigation} />
          <ActivityIndicator size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <CoinHeader title="Summary" navigation={this.props.navigation} />
        <Title style={{ paddingTop: 10, paddingBottom: 10, color: "black" }}>
          {this.props.navigation.getParam("currencySlug", "Coin")}
        </Title>
        <MeteorComplexListView
          elements={() => {
            return Meteor.collection("summaries").find({
              currencySlug: this.props.navigation.getParam(
                "currencySlug",
                "Coin"
              )
            });
          }}
          options={{ sort: { rating: -1 } }}
          enableEmptySections={true}
          renderRow={this._renderRow}
        />
      </Container>
    );
  }
}

export default withTracker(params => {
  //const handle = Meteor.subscribe("auctions");
  const handle = Meteor.subscribe("summaries");
  return {
    dataReady: handle.ready()
  };
})(CoinSummary);
