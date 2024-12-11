import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>CT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>AB</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>DB</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>ACC</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0d0551', // Footer background color
        height: 60,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
