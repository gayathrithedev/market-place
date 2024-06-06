// globals
import React from 'react';
import {StyleSheet, TextInput, View, Platform} from 'react-native';

// icons
import {faCamera, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../../theme/colors';

const SearchBar = () => {
  return (
    <View style={styles.searchRow}>
      <View style={styles.searchRowLeft}>
        <FontAwesomeIcon icon={faSearch} size={18} />
        <TextInput placeholder="Search" />
      </View>
      <FontAwesomeIcon icon={faCamera} size={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.grayLight,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'android' ? 4 : 16,
  },
  searchRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
