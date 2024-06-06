// globals
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// components
import CategoryItem from '../atoms/CategoryItem';

// data
import {categoriesList} from '../../data/categoriesData';

const CategoryList = () => {
  return (
    <ScrollView
      style={styles.listRow}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categoriesList?.map(item => (
        <CategoryItem categoryInfo={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
  },
});

export default CategoryList;
