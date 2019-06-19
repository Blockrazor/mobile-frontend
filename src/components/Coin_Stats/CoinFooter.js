import React, { Component } from "react";
import { View, Platform, AsyncStorage } from "react-native";
import {
  ListItem,
  Icon,
  Header,
  Left,
  Body,
  Text,
  Right,
  Thumbnail,
  Card,
  CardItem,
  Segment,
  Button,
  Content,
  Container,
  Footer,
  FooterTab
} from "native-base";
import AppStyle from "../AppStyle";
import { connect } from "react-redux";
import { setCurrency, getCurrencies } from "../../redux/app-redux";
import Meteor from "react-native-meteor";
import Tooltip from 'react-native-walkthrough-tooltip';

const mapStateToProps = state => {
  return {
    currency: state.currency,
    likeToolTipVisible: false,
    firstTimeLike: false,
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

class CointFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    // AsyncStorage.removeItem('firstTimeLike', (error) => {  });
  }

  isFirstTimeLike = () => {
    AsyncStorage.getItem('firstTimeLike').then((value) => {
      if (value == null) {
        return true;
      }
      else {
        return false;
      }
    }).catch((error) => {
      console.log(error);
      return false;
    })
  }

  _LikeCoins(direction) {
    if (this.props.currency._id == undefined) {
      //stop it when loading
      return;
    }
    if (!Meteor.user()) {
      //stop it when user is not logged in
      alert('Please Login to like/dislike');
      return;
    }
    this.props.setCurrency({});
    this.props.getCurrencies();
    Meteor.call("VoteCoinPerf", this.props.currency._id, direction, (err, data) => {
      if (!err) {
        AsyncStorage.getItem('firstTimeLike', (error, result) => {
          if (!error) {
            if (result == null) {
              this.setState({ likeToolTipVisible: true });
              AsyncStorage.setItem('firstTimeLike', "false");
            }
          }
        })
      }
      else {
        console.log(err.reason);
      }
    });
  }

  _ChangeCoins() {
    if (this.props.currency._id == undefined) {
      //stop it when loading
      return;
    }
    this.props.setCurrency({});
    this.props.getCurrencies();
  }

  render() {
    // if(!Meteor.user()){
    //   return(
    //     <Footer>
    //     <FooterTab style={AppStyle.footerLight}>
    //       <Button full onPress={()=>{this._ChangeCoins()}}>
    //         <Icon name="fastforward" style={{ color: "#5cb85c" }} />
    //       </Button>
    //     </FooterTab>
    //   </Footer>
    //   )
    // }
    return (<Tooltip
      animated
      isVisible={this.state.likeToolTipVisible}
      content={<View><Text> Your liked Coin will be stored. </Text></View>}
      // displayArea={{ x: 0, y: 0, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}
      // placement="top"
      onChildPress={() => { this.setState({ likeToolTipVisible: false })}}
      onClose={() => this.setState({ likeToolTipVisible: false })}
    >
      <Footer>
        <FooterTab style={AppStyle.footerLight}>
          <Button full onPress={() => { this._LikeCoins("down") }}>
            <Icon name="close-circle" style={{ color: "#d9534f" }} />
          </Button>
          <Button full onPress={() => { this._LikeCoins("up") }}>
            <Icon name="checkmark-circle" style={{ color: "#5cb85c" }} />
          </Button>
        </FooterTab>
      </Footer>
    </Tooltip>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (CointFooter)
);