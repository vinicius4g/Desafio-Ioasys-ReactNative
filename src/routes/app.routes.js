import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Listing } from '../screens/Listing';
import { Filter } from '../screens/Filter';
import { Detail } from '../screens/Detail';

import commonStyles from '../global/CommonStyles';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <Navigator
        tabBarOptions={{
          activeTintColor: commonStyles.colors.primary,
          inactiveTintColor: commonStyles.colors.text_dark,
          labelPosition: 'beside-icon',
          style: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 88
          }
        }}
      >
        <Screen
          name='Empresas'
          component={Listing}
          options={{
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons
                name='format-list-bulleted'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Screen
          name='Pesquisar'
          component={Filter}
          options={{
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='search' size={size} color={color} />
            )
          }}
        />
        <Screen
          name='Detalhes'
          component={Detail}
          options={{
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='account-balance' size={size} color={color} />
            )
          }}
        />
      </Navigator>
    </>
  );
}
