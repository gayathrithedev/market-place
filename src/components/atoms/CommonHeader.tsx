// globals
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

// types
type Props = {
  title: string;
};

const CommonHeader = (props: Props) => {
  const {title} = props;
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerRow}>
      <TouchableOpacity onPress={navigateToBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </TouchableOpacity>
      <View>
        <Text style={[fonts.onest600, styles.headerTitle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: colors.black,
  },
});

export default CommonHeader;
