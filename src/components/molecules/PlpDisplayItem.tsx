// globals
import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

// theme
import {fonts} from '../../theme/fonts';
import PlpSlider from '../organisms/PlpSlider';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

// props
type Props = {
  info: any;
};

const width = Dimensions.get('screen').width / 2;

const PlpDisplayItem = (props: Props) => {
  const {info} = props;
  const {navigate} = useNavigation();

  const navigateToProductDetail = () => {
    navigate('ProductDetail', {
      data: info.item,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToProductDetail}>
      <PlpSlider images={info.item.images} />
      <Text style={[fonts.onest500, styles.name]}>{info.item.name}</Text>
      <Text style={[fonts.onest700, styles.price]}>{info.item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 8,
    // alignItems: 'center',
    paddingBottom: 20,
  },
  name: {
    paddingTop: 8,
    fontSize: 16,
    color: colors.black,
  },
  price: {
    paddingTop: 4,
    fontSize: 16,
    color: colors.black,
  },
});

export default PlpDisplayItem;
