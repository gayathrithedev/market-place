// globals
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

// theme
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

// loader
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// types
type Props = {
  data: any;
};

const BrandListItem = (props: Props) => {
  const {data} = props;
  const [loading, setLoading] = useState(false);
  const startImageLoading = () => {
    setLoading(true);
  };
  const endImageLoading = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <View style={{alignSelf: 'flex-end'}}>
          <SkeletonPlaceholder borderRadius={12}>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={'100%'}
              borderRadius={8}
            />
          </SkeletonPlaceholder>
        </View>
      ) : null}
      <ImageBackground
        onLoadStart={startImageLoading}
        onLoadEnd={endImageLoading}
        source={{uri: data.uri}}
        style={styles.bgStyle}
        imageStyle={styles.imgStyle}>
        <View style={styles.brandInfo}>
          <Text style={[fonts.onest800, styles.brandName]}>{data.name}</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  brandInfo: {
    width: '100%',
    height: '100%',
    backgroundColor: `${colors.black}20`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  brandName: {
    fontSize: 24,
    color: colors.black,
  },
  bgStyle: {
    width: 250,
    height: 180,
    marginRight: 16,
  },
  imgStyle: {
    borderRadius: 12,
  },
});

export default BrandListItem;
