// globals
import React, {useState} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// theme
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

// navigation
import {useNavigation} from '@react-navigation/native';

// loader
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// types
type Props = {
  categoryInfo: any;
};

const CategoryItem = (props: Props) => {
  const {categoryInfo} = props;
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  const navigateToGoods = () => {
    navigate('Goods');
  };

  const startImageLoading = () => {
    setLoading(true);
  };
  const endImageLoading = () => {
    setLoading(false);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToGoods}>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item width={120} height={120} borderRadius={8} />
        </SkeletonPlaceholder>
      ) : null}
      <Image
        onLoadStart={startImageLoading}
        onLoadEnd={endImageLoading}
        source={{uri: categoryInfo?.category_img}}
        style={styles.img}
      />
      {!loading ? (
        <Text style={[fonts.onest500, styles.categoryName]}>
          {categoryInfo.name}
        </Text>
      ) : null}
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
