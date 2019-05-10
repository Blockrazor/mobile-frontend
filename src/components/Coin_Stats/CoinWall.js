import React, { Component } from 'react';
import { View } from 'react-native';
import { Content } from 'native-base';
import NewsCard from './NewsCard';
import CommentCard from './CommentCard';
export default class CoinsWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Content>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Cardano (ADA) Up 8.2 Percents as More Americans Hold" content="A Blockchain Capital survey reveals that ADA awareness, familiarity, and perception has improved, explaining the high Cardano (ADA) ..." />
                <CommentCard comment="It doesn’t do anything." color="#e0d1d1" />
                <CommentCard comment="In just under 20 years, the bank has been indicted a staggering 93 times and fined more than $14 billion. And the crimes ascribed to Wells Fargo, well, they include such gems as account forgeries, insurance fraud, and illegal charges to mention a few." color="#e0d1d1" />
                <NewsCard img='https://assets.coingecko.com/markets/images/52/large/binance.jpg?1519353250' title="Of the many like centralization and distribution levels, the hash rate can divulge more than just security" content="doesn't need Binance.” The above comment is unsurprising coming from someone who initially dismissed companies like Amazon and Apple." />
                <CommentCard comment="the top-ranked cryptocurrency as being nothing but a gamble dominated by frauds." color="#d1e0d9" />
                <NewsCard img='https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066' title="Securing the network by running full nodes. " content="At the time of writing, Bitcoin is trading down just under 1% at its current price of $5,730, down slightly from its 24-hour highs of $5,830 which were set late yesterday." />
            </Content>
        );
    }
}
