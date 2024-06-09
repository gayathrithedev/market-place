import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import CommonHeader from '../components/atoms/CommonHeader';
import {useSelector} from 'react-redux';
import PlpDisplayList from '../components/organisms/PlpDisplayList';

const Wishlist = () => {
  const {products} = useSelector((state: any) => state.wishlist);
  const isEmpty = products?.length === 0;
  console.log(products, '---------');
  return (
    <View style={styles.container}>
      <CommonHeader title="Wishlist" />
      {isEmpty ? (
        <View>
          <Text>Nothing's here!</Text>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <PlpDisplayList data={products} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  listContainer: {
    paddingTop: 16,
  },
});

export default Wishlist;
