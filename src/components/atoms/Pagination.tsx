// globals
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../theme/colors';

// types
type Props = {
  active: number;
  length: number;
};

const Pagination = (props: Props) => {
  const {active, length} = props;
  const arr = Array.from({length}, (v, i) => i);
  return (
    <View style={styles.pageRow}>
      {arr.map(item => (
        <View
          key={item}
          style={[
            styles.bg,
            active === item ? styles.active : styles.notActive,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bg: {
    marginHorizontal: 4,
    width: 40,
    height: 7,
    borderRadius: 3.5,
  },
  active: {
    backgroundColor: colors.black,
  },
  notActive: {
    backgroundColor: colors.gray,
    width: 7,
  },
});

export default Pagination;
