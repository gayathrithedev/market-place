// globals
import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// datas
import {brandSData} from '../../data/brandsData';
import BrandListItem from '../atoms/BrandListItem';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const BrandsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={[fonts.onest700, styles.subtitle]}>Top Brands</Text>
        <TouchableOpacity style={styles.ctaRow}>
          <Text>View All</Text>
          <FontAwesomeIcon icon={faChevronRight} size={14} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={brandSData}
        renderItem={({item}) => <BrandListItem data={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.black,
  },
  container: {},
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});

export default BrandsList;
