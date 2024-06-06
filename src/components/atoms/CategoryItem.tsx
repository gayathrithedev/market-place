// globals
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

// types
type Props = {
  categoryInfo: any;
};

const CategoryItem = (props: Props) => {
  const {categoryInfo} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri: categoryInfo?.category_img}} style={styles.img} />
      <Text style={[fonts.onest500, styles.categoryName]}>
        {categoryInfo.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    marginRight: 16,
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 12,
    paddingTop: 8,
    color: colors.black,
  },
});

export default CategoryItem;
