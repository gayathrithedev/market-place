// globals
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// data
import {homeGoodsData} from '../../data/homeGoodsData';

// component
import GoodsItem from '../atoms/GoodsItem';

const GoodsList = () => {
  return (
    <ScrollView
      style={styles.listRow}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {homeGoodsData?.map(item => (
        <React.Fragment key={item.id}>
          <GoodsItem info={item} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default GoodsList;
