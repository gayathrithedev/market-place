// globals
import React from 'react';
import {StyleSheet, View} from 'react-native';

// data
import {homeGoodsData} from '../../data/homeGoodsData';

// component
import GoodsItem from '../atoms/GoodsItem';

const GoodsList = () => {
  return (
    <View style={styles.listRow}>
      {homeGoodsData?.map(item => (
        <View key={item.id} style={styles.listItemWrapper}>
          <GoodsItem info={item} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItemWrapper: {
    width: '50%',
  },
});

export default GoodsList;
