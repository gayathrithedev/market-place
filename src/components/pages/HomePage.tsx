// globals
import React from 'react';
import {View} from 'react-native';

// components
import HomeTemplate from '../templates/HomeTemplate';

// data
import {categoriesList} from '../../data/categoriesData';

const HomePage = () => {
  return (
    <View>
      <HomeTemplate data={categoriesList} />
    </View>
  );
};

export default HomePage;
