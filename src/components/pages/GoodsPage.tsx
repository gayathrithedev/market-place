// globals
import React from 'react';
import {View} from 'react-native';

// components
import GoodsTemplate from '../templates/GoodsTemplate';

// data
import {homeGoodsData} from '../../data/homeGoodsData';

const GoodsPage = () => {
  return (
    <View>
      <GoodsTemplate data={homeGoodsData} />
    </View>
  );
};

export default GoodsPage;
