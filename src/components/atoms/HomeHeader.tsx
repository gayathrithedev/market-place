// globals
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faLocationDot} from '@fortawesome/free-solid-svg-icons';

// theme
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const HomeHeader = () => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.headerLeft}>
        <View>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={25}
            color={colors.green}
          />
        </View>
        <View style={styles.deliveryInfoView}>
          <Text style={[fonts.onest200, {color: colors.gray}]}>
            Express delivery
          </Text>
          <Text style={[fonts.onest300, {color: colors.black}]}>
            Leipzig street 21
          </Text>
        </View>
      </View>
      <View>
        <FontAwesomeIcon icon={faBell} size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryInfoView: {
    paddingLeft: 8,
  },
});

export default HomeHeader;
