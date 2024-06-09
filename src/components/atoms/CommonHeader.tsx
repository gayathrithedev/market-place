// globals
import React, {useDebugValue} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// types
type Props = {
  title: string;
  showCta: boolean;
  isWishlisted: boolean;
  onClickWishList: any;
  onClickShare: any;
};

const CommonHeader = (props: Props) => {
  const {title, showCta, isWishlisted, onClickWishList, onClickShare} = props;
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerRow}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={navigateToBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View>
          <Text style={[fonts.onest600, styles.headerTitle]}>{title}</Text>
        </View>
      </View>
      {showCta ? (
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={onClickWishList}>
            <FontAwesomeIcon
              icon={faHeart}
              color={isWishlisted ? colors.red : `${colors.gray}50`}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickShare}>
            <FontAwesomeIcon
              icon={faShare}
              color={colors.black}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  shareIcon: {
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    paddingLeft: 24,
    fontSize: 16,
    color: colors.black,
  },
});

export default CommonHeader;
