// globals
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// utils
import {getUserInfo} from '../utils/storage';

// theme
import {fonts} from '../theme/fonts';
import {colors} from '../theme/colors';

// component
import CommonHeader from '../components/atoms/CommonHeader';
import {logout} from '../utils/firebase';

const Settings = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getUserDetails = async () => {
      const result = await getUserInfo();
      setUserData(result);
    };
    getUserDetails();
  }, []);

  const onClickLogout = () => {
    logout();
  };
  return (
    <View style={styles.container}>
      <CommonHeader title="Settings" />
      <Text style={[fonts.onest800, styles.welcome]}>Hi!</Text>
      <Text style={[fonts.onest400]}>{userData?.email}</Text>
      <TouchableOpacity style={styles.ctaBtn} onPress={onClickLogout}>
        <Text style={[fonts.onest700, styles.ctaText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: colors.white,
  },
  welcome: {
    paddingTop: 24,
    fontSize: 24,
    color: colors.black,
  },
  email: {
    fontSize: 16,
    color: colors.black,
  },
  ctaBtn: {
    marginTop: 24,
    padding: 16,
    backgroundColor: colors.black,
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 14,
  },
  ctaText: {
    fontSize: 20,
    color: colors.white,
  },
});

export default Settings;
