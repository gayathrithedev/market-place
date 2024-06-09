// globals
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

// loader
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// types
type Props = {
  data: any;
};

const ProductSliderItem = (props: Props) => {
  const {data} = props;
  const [loading, setLoading] = useState(false);

  const startImageLoading = () => {
    setLoading(true);
  };
  const endImageLoading = () => {
    setLoading(false);
  };
  return (
    <View>
      {loading ? (
        <SkeletonPlaceholder borderRadius={12}>
          <SkeletonPlaceholder.Item
            width={'96%'}
            height={470}
            borderRadius={8}
          />
        </SkeletonPlaceholder>
      ) : null}
      <ImageBackground
        onLoadStart={startImageLoading}
        onLoadEnd={endImageLoading}
        source={{uri: data.uri}}
        style={styles.image}
        imageStyle={styles.bgStyle}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '96%',
    height: 470,
  },
  bgStyle: {
    borderRadius: 12,
  },
});

export default ProductSliderItem;
