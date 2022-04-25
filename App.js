import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './screens/Home';
import HistoryTrivia from './screens/HistoryTrivia';
import GeoTrivia from './screens/GeoTrivia';
import ProgTrivia from './screens/ProgTrivia';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="HistoryTrivia" component={HistoryTrivia} />
				<Stack.Screen name="GeoTrivia" component={GeoTrivia} />
				<Stack.Screen name="ProgTrivia" component={ProgTrivia} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export const styles = StyleSheet.create({
	container: {
		padding: 16,
		height: "100%",
		flex: 1,
	},
	button: {
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		borderWidth: 2,
		borderColor: "white",
		color: "white",
		backgroundColor: 'black',
	  },
	  text: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	  },
	  header: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 12,
	  },
	  footer: {
		alignItems: 'center',
		paddingVertical: 12,
		marginBottom: 16,
		justifyContent: 'bottom',
	  },

})