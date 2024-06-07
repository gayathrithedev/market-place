// globals
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const HomeBanner = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://www.dropbox.com/scl/fi/5t2by6a39gbxblyjz1f1j/banner.jpg?rlkey=x1onc67au5d4mh4ubcxxfcrr4&st=v63ojyiw&raw=1',
      }}
      imageStyle={styles.imgStyle}
      style={styles.bannerImg}>
      <View style={styles.infoRow}>
        <View>
          <Text style={[fonts.onest700, styles.title]}>Down Payment 0%</Text>
          <Text style={[fonts.onest300, styles.subtitle]}>
            Action from 1 - 30 April
          </Text>
        </View>
        <TouchableOpacity style={styles.ctaContainer}>
          <Text style={[fonts.onest600, styles.ctaText]}>LokkeStore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ctaContainer: {
    textAlign: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.grayLight,
  },
  ctaText: {
    fontSize: 14,
    color: colors.black,
  },
  title: {
    fontSize: 18,
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  bannerImg: {
    width: '100%',
  },
  imgStyle: {
    borderRadius: 12,
  },
});

export default HomeBanner;
