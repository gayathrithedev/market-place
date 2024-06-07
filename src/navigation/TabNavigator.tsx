// gloabls
import React from 'react';

// tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBagShopping,
  faHeart,
  faWallet,
  faHome,
  faGear,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

// screens
import Settings from '../screens/Settings';
import Wallet from '../screens/Wallet';
import Cart from '../screens/Cart';
import Wishlist from '../screens/Wishlist';
import {colors} from '../theme/colors';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const getIcons = (name: string) => {
  switch (name) {
    case 'Root':
      return faHome;
    case 'Wallet':
      return faWallet;
    case 'Cart':
      return faBagShopping;
    case 'Wishlist':
      return faHeart;
    case 'Settings':
      return faGear;
    default:
      return faCircle;
  }
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          return (
            <FontAwesomeIcon
              icon={getIcons(route.name)}
              size={20}
              color={focused ? colors.black : colors.gray}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Root" component={StackNavigator} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
