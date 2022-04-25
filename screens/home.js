import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../App';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
            <Pressable onPress={() => navigation.navigate("Trivia")} style={styles.button}>
                <Text style={styles.text}>Begin Trivia</Text>
            </Pressable>
		</View>
	);
}
