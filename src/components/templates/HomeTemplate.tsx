// globals
import React from 'react';
import {StyleSheet, View} from 'react-native';

// components
import HomeHeader from '../atoms/HomeHeader';
import SearchBar from '../atoms/SearchBar';
import CategoryList from '../organisms/CategoryList';

// theme
import {colors} from '../../theme/colors';

// types
type Props = {
  data: any;
};

const HomeTemplate = (props: Props) => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.searchBarContainer}>
        <CategoryList data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
  searchBarContainer: {
    paddingTop: 16,
  },
});

export default HomeTemplate;
