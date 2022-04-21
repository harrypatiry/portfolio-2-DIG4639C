import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { styles } from '../App';

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
            <Pressable style={styles.button}>
                <Text style={styles.text}>start</Text>
            </Pressable>
		</View>
	);
}
