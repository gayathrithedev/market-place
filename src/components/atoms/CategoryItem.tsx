// globals
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// theme
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

// navigation
import {useNavigation} from '@react-navigation/native';

// types
type Props = {
  categoryInfo: any;
};

const CategoryItem = (props: Props) => {
  const {categoryInfo} = props;
  const {navigate} = useNavigation();

  const navigateToGoods = () => {
    navigate('Goods');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToGoods}>
      <Image source={{uri: categoryInfo?.category_img}} style={styles.img} />
      <Text style={[fonts.onest500, styles.categoryName]}>
        {categoryInfo.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingRight: 16,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 14,
    paddingTop: 8,
    color: colors.black,
  },
});

export default CategoryItem;
