import React, { Component } from 'react';
import { View } from 'react-native';
import { Content} from 'native-base';
import NewsCard from './NewsCard';

export default class CoinsNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Content>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Warren Buffett Calls Bitcoin a 'Gambling Device'" content="doesn't need Bitcoin.” The above comment is unsurprising coming from someone who initially dismissed companies like Amazon and Apple."/>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Cardano (ADA) Consolidates Within the $5,700 Region" content="At the time of writing, Bitcoin is trading down just under 1% at its current price of $5,730, down slightly from its 24-hour highs of $5,830 which were set late yesterday.

Over a one-week period BTC has been able to surge from lows of roughly $5,200 to ..."/>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Cardano (ADA) Up 8.2 Percents as More Americans Hold" content="A Blockchain Capital survey reveals that Bitcoin awareness, familiarity, and perception has improved, explaining the high Bitcoin (BTC) ..." />
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Of the many like centralization and distribution levels, the hash rate can divulge more than just security" content="doesn't need Bitcoin.” The above comment is unsurprising coming from someone who initially dismissed companies like Amazon and Apple."/>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Securing the network by running full nodes. " content="At the time of writing, Bitcoin is trading down just under 1% at its current price of $5,730, down slightly from its 24-hour highs of $5,830 which were set late yesterday.

Over a one-week period BTC has been able to surge from lows of roughly $5,200 to ..."/>
                <NewsCard img='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' title="Bitcoin Price Analysis" content="A Blockchain Capital survey reveals that Bitcoin awareness, familiarity, and perception has improved, explaining the high Bitcoin (BTC) ..." />
            </Content>
        );
    }
}
