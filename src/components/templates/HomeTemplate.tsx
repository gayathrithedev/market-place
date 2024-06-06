import React from 'react';
import {StyleSheet, View} from 'react-native';

// components
import HomeHeader from '../atoms/HomeHeader';
import SearchBar from '../atoms/SearchBar';
import {colors} from '../../theme/colors';
import CategoryList from '../organisms/CategoryList';

const HomeTemplate = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.searchBarContainer}>
        <CategoryList />
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
