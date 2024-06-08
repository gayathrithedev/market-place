// globals
import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';

// formik and yup
import {Formik} from 'formik';
import * as yup from 'yup';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';
import {signUp} from '../utils/firebase';
import {useNavigation} from '@react-navigation/native';

// create a validation schema using Yup
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUp = () => {
  const {navigate} = useNavigation();

  const handleFormSubmit = values => {
    // Handle form submission logic here
    console.log(values);
    signUp(values.email, values.password);
  };

  const navigateToLogin = () => {
    navigate('Login');
  };

  return (
    <Formik
      initialValues={{username: '', email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values, errors}) => (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <ImageBackground
              source={require('../images/bg.jpg')}
              style={styles.bgImg}
              imageStyle={styles.bgImgContainerstyle}>
              <View style={styles.headingContainer}>
                <View style={styles.titleContainer}>
                  <Text style={[fonts.onest800, styles.title]}>Sign Up</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={{paddingTop: 16}} />
            <TextInput
              placeholder="Username"
              onChangeText={handleChange('username')}
              value={values.username}
              style={styles.input}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              style={styles.input}
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
              style={styles.input}
              autoCapitalize="none"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.ctaContainer}>
              <Text style={[fonts.onest600, styles.ctaText]}>Submit</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={[fonts.onest400, styles.desc]}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={navigateToLogin}>
                <Text style={[fonts.onest500, styles.loginText]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginText: {
    fontSize: 16,
    color: colors.black,
    textDecorationLine: 'underline',
  },
  desc: {
    fontSize: 16,
    color: colors.black,
    paddingRight: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
  },
  ctaText: {
    color: colors.grayLight,
    fontSize: 18,
    textAlign: 'center',
  },
  ctaContainer: {
    padding: 16,
    backgroundColor: colors.black,
    borderRadius: 16,
    marginTop: 24,
  },
  titleContainer: {
    position: 'absolute',
    bottom: -12,
  },
  title: {
    fontSize: 24,
    color: colors.black,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: colors.grayLight,
    marginTop: 16,
  },
  bgImg: {
    width: '100%',
    height: 200,
  },
  bgImgContainerstyle: {
    borderRadius: 16,
  },
  headingContainer: {
    borderRadius: 16,
    borderStartColor: `${colors.grayLight}10`,
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default SignUp;
