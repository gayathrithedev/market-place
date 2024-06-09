// globals
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

// theme
import {colors} from '../../theme/colors';

// loader
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// types
type Props = {
  data: any;
};

const PlpSliderItem = (props: Props) => {
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
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            width={'86%'}
            height={200}
            borderRadius={8}
          />
        </SkeletonPlaceholder>
      ) : null}
      <ImageBackground
        onLoadStart={startImageLoading}
        onLoadEnd={endImageLoading}
        source={{uri: data.uri}}
        imageStyle={styles.image}
        resizeMode="cover">
        <View style={styles.favIconContainer}>
          <FontAwesomeIcon
            icon={faHeart}
            color={data.isWishlisted ? colors.red : `${colors.grayLight}50`}
          />
        </View>
        <View />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '86%',
    height: 200,
    borderRadius: 12,
  },
  favIconContainer: {
    alignItems: 'flex-end',
    marginRight: 36,
    marginTop: 8,
  },
});

export default PlpSliderItem;
