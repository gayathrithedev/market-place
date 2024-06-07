// globals
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation
import {useNavigation} from '@react-navigation/native';

// theme
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

// types
type Props = {
  info: any;
};

const GoodsItem = (props: Props) => {
  const {info} = props;
  const {navigate} = useNavigation();

  const navigateToGoodsPage = () => {
    navigate('Goods');
  };

  return (
    <TouchableOpacity onPress={navigateToGoodsPage} style={styles.card}>
      <Text style={[fonts.onest600, styles.name]}>{info.name}</Text>
      <Image source={{uri: info.img}} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: colors.grayLight,
    margin: 4,
    borderRadius: 12,
  },
  name: {
    fontSize: 14,
    color: colors.black,
  },
  img: {
    width: 100,
    height: 80,
    alignSelf: 'flex-end',
  },
});

export default GoodsItem;
