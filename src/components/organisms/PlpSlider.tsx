// globals
import React from 'react';
import {useWindowDimensions} from 'react-native';

// carousel
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

// animated
import {useSharedValue} from 'react-native-reanimated';
import PlpSliderItem from '../molecules/PlpSliderItem';

// types
type Props = {
  data: any;
  isWishlisted: boolean;
};

const PlpSlider = (props: Props) => {
  const {data, isWishlisted} = props;
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
      onScrollStart={() => {}}
      onScrollEnd={() => {}}
      onConfigurePanGesture={g => g.enabled(false)}
      pagingEnabled={true}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({index, item}) => (
        <PlpSliderItem data={item} isWishlisted={isWishlisted} />
      )}
    />
  );
};

export default PlpSlider;
