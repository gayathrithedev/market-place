//gloabls
import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// theme
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight, faPercent} from '@fortawesome/free-solid-svg-icons';

// types
type Props = {
  type: number;
  selectedType: number;
  setSelectedType: any;
};

const PlpSectionButton = (props: Props) => {
  const {type, selectedType, setSelectedType} = props;

  if (type === 1) {
    return (
      <TouchableOpacity
        style={[
          styles.btn,
          selectedType === type ? styles.selectedBtn : styles.notSelectedBtn,
        ]}
        onPress={() => setSelectedType()}>
        <Text
          style={[
            fonts.onest400,
            styles.text,
            selectedType === type
              ? styles.selectedText
              : styles.nonSelectedText,
          ]}>
          For you
        </Text>
      </TouchableOpacity>
    );
  }

  if (type === 2) {
    return (
      <TouchableOpacity
        style={[
          styles.rowBtn,
          styles.btn,
          selectedType === type ? styles.selectedBtn : styles.notSelectedBtn,
        ]}
        onPress={() => setSelectedType()}>
        <FontAwesomeIcon
          icon={faPercent}
          color={selectedType === type ? colors.white : colors.green}
        />
        <Text
          style={[
            fonts.onest400,
            styles.text,
            selectedType === type
              ? styles.selectedText
              : styles.nonSelectedText,
            {paddingLeft: 8},
          ]}>
          Prices of the day
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.rowBtn, styles.btn, {marginRight: 0}]}
      onPress={() => setSelectedType(3)}>
      <Text style={[fonts.onest400, styles.text, styles.nonSelectedText]}>
        View All
      </Text>
      <FontAwesomeIcon icon={faChevronRight} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 18,
    padding: 8,
    marginRight: 16,
  },
  selectedBtn: {
    backgroundColor: colors.black,
  },
  notSelectedBtn: {
    backgroundColor: colors.grayLight,
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    color: colors.white,
  },
  nonSelectedText: {
    color: colors.black,
  },
});

export default PlpSectionButton;
