// globals
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

// carousel
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

// animated
import {useSharedValue} from 'react-native-reanimated';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

// theme
import {colors} from '../../theme/colors';

// types
type Props = {
  data: any;
};

const PlpSlider = (props: Props) => {
  const {data} = props;
  const windowWidth = useWindowDimensions().width / 2;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: 200,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: 200,
      } as const);

  return (
    <Carousel
      {...baseOptions}
      loop
      enabled // Default is true, just for demo
      ref={ref}
      defaultScrollOffsetValue={scrollOffsetValue}
      testID={'xxx'}
      autoPlay={isAutoPlay}
      autoPlayInterval={isFast ? 100 : 2000}
      data={data.images}
      onScrollStart={() => {
        console.log('===1');
      }}
      onScrollEnd={() => {
        console.log('===2');
      }}
      onConfigurePanGesture={g => g.enabled(false)}
      pagingEnabled={true}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({index, item}) => (
        <ImageBackground
          source={{uri: item.uri}}
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
      )}
    />
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

export default PlpSlider;
