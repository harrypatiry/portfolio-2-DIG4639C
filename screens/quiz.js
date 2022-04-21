import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { styles } from '../App';

export default function Quiz() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Question</Text>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Option</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Option</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Option</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Option</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.footer]}>
                <Text style={styles.text}>next</Text>
            </Pressable>
		</View>
	);
}
