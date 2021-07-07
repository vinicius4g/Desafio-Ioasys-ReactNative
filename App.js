import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native'

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold
} from '@expo-google-fonts/poppins'

import AuthProvider from './src/contexts/auth'
import SearchProvider from './src/contexts/search'

import { Load } from './src/components/Load'

import { Routes } from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold
	})

	if(!fontsLoaded){
		return <Load />
	}

	return (
		<NavigationContainer>
			<AuthProvider>
				<SearchProvider>
					<StatusBar backgroundColor="#000000" barStyle="light-content" />
					<Routes />
				</SearchProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
