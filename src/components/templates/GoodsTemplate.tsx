// globals
import React from 'react';
import {StyleSheet, View} from 'react-native';

// components
import GoodsList from '../organisms/GoodsList';

// theme
import {colors} from '../../theme/colors';
import CommonHeader from '../atoms/CommonHeader';
import BrandsList from '../organisms/BrandsList';

const GoodsTemplate = () => {
  return (
    <View style={styles.container}>
      <CommonHeader title="Home Goods" />
      <View style={styles.searchBarContainer}>
        <GoodsList />
      </View>
      <View style={styles.searchBarContainer}>
        <BrandsList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
  searchBarContainer: {
    paddingTop: 20,
  },
});

export default GoodsTemplate;
