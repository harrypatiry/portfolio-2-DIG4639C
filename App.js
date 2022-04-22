import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Quiz" component={Quiz} />
				<Stack.Screen name="Results" component={Results} />
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
		backgroundColor: 'black',
	  },
	  text: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	  },
	  incorrect: {
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
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