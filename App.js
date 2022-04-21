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
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Quiz" component={Quiz} />
					<Stack.Screen name="Results" component={Results} />
				</Stack.Navigator>
    		</NavigationContainer>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingal: 16,
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
	  header: {
		marginVertical: 12,
	  },
	  footer: {
		alignItems: 'center',
		marginBottom: 16,
		justifyContent: 'bottom',
	  },

})