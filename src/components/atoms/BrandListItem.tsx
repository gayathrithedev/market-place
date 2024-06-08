// globals
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

// types
type Props = {
  data: any;
};

const BrandListItem = (props: Props) => {
  const {data} = props;
  console.log(data, '=======');
  return (
    <ImageBackground
      source={{uri: data.uri}}
      style={styles.bgStyle}
      imageStyle={styles.imgStyle}>
      <View style={styles.brandInfo}>
        <Text style={[fonts.onest800, styles.brandName]}>{data.name}</Text>
      </View>
    </ImageBackground>
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
