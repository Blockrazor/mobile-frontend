import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
    InputGroup,
    Input,
    Item
} from "native-base";
import AppStyle from "../components/AppStyle";
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from "react-redux";
import { setCurrency } from "../redux/app-redux";
import Meteor, {
    withTracker,
    MeteorComplexListView,
    ReactiveVar
} from "react-native-meteor";

class LikedCoinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCurrencies: null,
            keyword: ""
        };
    }

    _onSummaryPress = coin => {
        this.props.setCurrency(coin);
        this.props.navigation.navigate("Home");
    };

    _onFeaturePress = slug => {
        this.props.navigation.navigate("CoinFeatures", { currencySlug: slug });
    };

    _onRedFlagPress = (slug, id) => {
        this.props.navigation.navigate("CoinRedFlag", {
            currencySlug: slug,
            currencyId: id
        });
    };

    SearchFilterFunction(keyword) {
        key = new RegExp(keyword);
        this.setState({
            keyword: keyword
        });
    }

    _userLikedCoin = ()=>{
        var likedCoin = Meteor.collection("userPerf").findOne({
            userId: Meteor.user()._id
        }).likedCoin;
        //console.log(likedCoin);
        return likedCoin;
    }

    render() {
        if (!(this.props.CoinReady && this.props.PerfReady)) {
            return (
                <Container>
                    <Header searchBar rounded style={AppStyle.headerDark}>
                        <Left style={{ flex: 0.1 }}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Item style={{ flex: 0.9 }}>
                            <Icon name={"search"} />
                            <Input />
                        </Item>
                    </Header>
                    <ActivityIndicator size="large" />
                </Container>
            );
        }
        return (
            <Container>
                <Header searchBar rounded style={AppStyle.headerDark}>
                    <Left style={{ flex: 0.1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Item style={{ flex: 0.9 }}>
                        <Icon name={"search"} />
                        <Input
                            onChangeText={keyword => {
                                this.SearchFilterFunction(keyword);
                            }}
                            placeholder="Search Your Liked Coin"
                            autoCorrect={false}
                            autoFocus={true}
                            maxLength={100}
                            value={this.state.keyword}
                        />
                    </Item>
                </Header>
                <MeteorComplexListView
                    elements={() => {
                        key = new RegExp(this.state.keyword);
                        return Meteor.collection("currencies").find({
                            currencyName: key,
                            _id : { $in: this._userLikedCoin() }
                        });
                    }}
                    options={{ sort: { eloRanking: -1 } }}
                    enableEmptySections={true}
                    renderRow={coin => {
                        return (
                            <Card>
                                <CardItem
                                    header
                                    bordered
                                    button
                                    onPress={() => this._onSummaryPress(coin)}
                                >
                                    <Left>
                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                            {coin.currencyName}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                            {coin.consensusSecurity}
                                        </Text>
                                    </Right>
                                </CardItem>
                                <CardItem
                                    bordered
                                    button
                                    onPress={() => this._onSummaryPress(coin)}
                                >
                                    <Grid>
                                        <Col>
                                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                                Price
                              </Text>
                                            <Text>{coin.price}</Text>
                                        </Col>
                                        <Col>
                                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                                CPC
                              </Text>
                                            <Text>{coin.cpc}</Text>
                                        </Col>
                                        <Col>
                                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                                CPT
                              </Text>
                                            <Text>{coin.cpt}</Text>
                                        </Col>
                                    </Grid>
                                </CardItem>
                            </Card>
                        );
                    }}
                />
            </Container>
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
        setCurrency: currency => {
            dispatch(setCurrency(currency));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTracker(params => {
        const CurrenciesHandle = Meteor.subscribe("approvedcurrencies");
        const Perfhandle = Meteor.subscribe("userPerf");
        return {
            CoinReady: CurrenciesHandle.ready(),
            PerfReady: Perfhandle.ready(),
        };
    })(LikedCoinScreen)
);
