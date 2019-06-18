import React, { Component } from "react";
import { View, Platform } from "react-native";
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
import { setCurrency , getCurrencies} from "../../redux/app-redux";
import Meteor from "react-native-meteor";

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
    getCurrencies: ()=>{
        dispatch(getCurrencies());
    }
  };
};

class CointFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _LikeCoins(direction) {
    if(this.props.currency._id == undefined){
      //stop it when loading
      return;
    }
    if(!Meteor.user()){
      //stop it when user is not logged in
      alert('Please Login to like/dislike');
      return;
    }
      this.props.setCurrency({});
      this.props.getCurrencies();
      Meteor.call("VoteCoinPerf", this.props.currency._id ,direction , (err, data)=>{
        if(!err){
          
        }
        else{
          console.log(err.reason);
        }
      });
  }

  _ChangeCoins(){
    if(this.props.currency._id == undefined){
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
    return (
      <Footer>
        <FooterTab style={AppStyle.footerLight}>
          <Button full onPress={()=>{this._LikeCoins("down")}}>
            <Icon name="close-circle" style={{ color: "#d9534f" }} />
          </Button>
          <Button full onPress={()=>{this._LikeCoins("up")}}>
            <Icon name="checkmark-circle" style={{ color: "#5cb85c" }} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    (CointFooter)
  );