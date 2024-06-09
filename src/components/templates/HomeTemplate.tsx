// globals
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

// components
import HomeHeader from '../atoms/HomeHeader';
import SearchBar from '../atoms/SearchBar';
import CategoryList from '../organisms/CategoryList';

// theme
import {colors} from '../../theme/colors';
import HomeBanner from '../atoms/HomeBanner';
import PlpSection from '../molecules/PlpSection';
import PlpDisplayList from '../organisms/PlpDisplayList';
import {plpSectionData} from '../../data/plpSectionData';
import {useSelector} from 'react-redux';

// types
type Props = {
  data: any;
};

const HomeTemplate = (props: Props) => {
  const {products} = useSelector((state: any) => state.wishlist);
  const {data} = props;
  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.searchBarContainer}>
        <CategoryList data={data} />
      </View>
      <View style={styles.searchBarContainer}>
        <HomeBanner />
      </View>
      <View style={styles.searchBarContainer}>
        <PlpSection />
      </View>
      <View style={styles.searchBarContainer}>
        <PlpDisplayList data={products} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
  searchBarContainer: {
    paddingTop: 20,
  },
});

export default HomeTemplate;
