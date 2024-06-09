// globals
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// carousel
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

// animated
import {useSharedValue} from 'react-native-reanimated';

// component
import Pagination from '../atoms/Pagination';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import ProductSliderItem from '../molecules/ProductSliderItem';

// theme

// types
type Props = {
  data: any;
};
const windowWidth = Dimensions.get('window').width;

const ProductSlider = (props: Props) => {
  const {data} = props;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: 500,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: 500,
      } as const);

  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        style={styles.slideContainer}
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
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({index, item}) => <ProductSliderItem data={item} />}
      />
      <View style={styles.pagContainer}>
        <Pagination active={currentIndex} length={data.images.length} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[fonts.onest600, styles.name]}>{data.name}</Text>
        <Text style={[fonts.onest700, styles.price]}>{data.price}</Text>
        <View style={styles.tagsContainer}>
          {data.tags.map(item => (
            <View key={item} style={styles.tagView}>
              <Text style={[fonts.onest300, styles.tagName]}>{item}</Text>
            </View>
          ))}
        </View>

        <Text
          style={[fonts.onest300, styles.desc]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {data.desc}
        </Text>
        <View style={styles.reviewsContainer}>
          <Text style={[fonts.onest700, styles.rating]}>
            {data.reviews.rating}
          </Text>
          <Text style={[fonts.onest400, styles.users]}>
            ({data.reviews.users})
          </Text>
          <View style={styles.starIcon}>
            <FontAwesomeIcon icon={faStar} color={colors.yellow} />
            <FontAwesomeIcon icon={faStar} color={colors.yellow} />
            <FontAwesomeIcon icon={faStar} color={colors.yellow} />
            <FontAwesomeIcon icon={faStar} color={colors.yellow} />
            <FontAwesomeIcon icon={faStar} color={colors.yellow} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    fontSize: 14,
    color: colors.black,
  },
  users: {
    fontSize: 12,
    color: colors.black,
    paddingLeft: 4,
  },
  starIcon: {
    flexDirection: 'row',
    paddingLeft: 4,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  desc: {
    fontSize: 14,
    color: colors.black,
    paddingTop: 8,
  },
  tagName: {
    fontSize: 12,
    color: colors.black,
  },
  tagView: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: colors.grayLight,
    marginRight: 8,
  },
  tagsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    top: 500,
    paddingTop: 16,
  },
  name: {
    fontSize: 20,
    color: colors.black,
  },
  price: {
    fontSize: 22,
    color: colors.black,
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 200,
  },
  pagContainer: {
    alignSelf: 'center',
    top: 500,
    position: 'absolute',
  },
  slideContainer: {
    alignItems: 'center',
  },
  favIconContainer: {
    alignItems: 'flex-end',
    marginRight: 36,
    marginTop: 8,
  },
});

export default ProductSlider;
