// globals
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation
import {useNavigation} from '@react-navigation/native';

// loader
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// theme
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

// types
type Props = {
  info: any;
};

const GoodsItem = (props: Props) => {
  const {info} = props;
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  const navigateToGoodsPage = () => {
    navigate('Goods');
  };
  const startImageLoading = () => {
    setLoading(true);
  };
  const endImageLoading = () => {
    setLoading(false);
  };

  return (
    <TouchableOpacity onPress={navigateToGoodsPage} style={styles.card}>
      <Text style={[fonts.onest600, styles.name]}>{info.name}</Text>
      {loading ? (
        <View style={{alignSelf: 'flex-end'}}>
          <SkeletonPlaceholder borderRadius={12}>
            <SkeletonPlaceholder.Item
              width={100}
              height={80}
              borderRadius={8}
            />
          </SkeletonPlaceholder>
        </View>
      ) : null}
      <Image
        source={{uri: info.img}}
        style={loading ? {} : styles.img}
        onLoadStart={startImageLoading}
        onLoadEnd={endImageLoading}
      />
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
