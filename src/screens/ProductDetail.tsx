// globals

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

// redux
import {useDispatch, useSelector} from 'react-redux';

// theme
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

// component
import ProductSlider from '../components/organisms/ProductSlider';
import CommonHeader from '../components/atoms/CommonHeader';

// actions
import {addToWishlist, removeWishlist} from '../store/actions/wishlistActions';

const ProductDetail = () => {
  const {params} = useRoute();
  const {data} = params;

  const {products} = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  const filterProduct = products.filter(item => item.id === data.id);
  const isWishlisted = filterProduct.length > 0;

  const addOrRemoveToWishlist = () => {
    if (isWishlisted) {
      const filterProducts = products.filter(
        item => item.isWishlisted !== data.isWishlisted,
      );
      dispatch(removeWishlist(filterProducts));
    } else {
      const updateProducts = [...products, data];
      dispatch(addToWishlist(updateProducts));
    }
  };
  const onShare = () => {};

  return (
    <View style={styles.wrapper}>
      <View style={styles.headContainer}>
        <CommonHeader
          title={data.name}
          showCta={true}
          isWishlisted={data.isWishlisted}
          data={data}
          onClickWishList={addOrRemoveToWishlist}
          onClickShare={onShare}
        />
        <ScrollView style={styles.container}>
          <ProductSlider data={data} />
        </ScrollView>
      </View>

      <View style={styles.ctaContainer}>
        <TouchableOpacity style={[styles.ctaBtn, styles.primary]}>
          <Text style={[fonts.onest600, styles.ctaText]}>Buy now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ctaBtn, styles.secondary]}>
          <Text style={[fonts.onest600, styles.ctaText]}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  ctaText: {
    color: colors.white,
    fontSize: 14,
  },
  primary: {
    backgroundColor: colors.black,
    marginRight: 16,
  },
  secondary: {
    backgroundColor: colors.green,
  },
  ctaBtn: {
    width: '47%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  ctaContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default ProductDetail;
