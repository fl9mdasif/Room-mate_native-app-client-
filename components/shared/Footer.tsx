

// import { Link } from "expo-router";
// import { StyleSheet } from "react-native";

// const Footer = () => {

//     return (
//         <div style={styles.footer}>
//             <Link style={styles.link} href={'/'}>Home</Link>
//             <Link style={styles.link} href={'/contact'}>contacr</Link>
//             <Link style={styles.link} href={'/about'}>About</Link>
//         </div>
//     )
// };

// export default Footer

// const styles = StyleSheet.create({
//     footer: {
//         position: 'relative',
//         height: 25,
//         backgroundColor: '#d0e7ff',
//         width: "100%",
//         flex: 1,
//         justifyContent: 'space-between'
//         // borderTopWidth: 0.5,
//         // borderTopColor: '#ccc',
//     },
//     link: {
//         fontSize: 13,
//         paddingBottom: 5,
//         backgroundColor: '#b984ff',
//         padding: 5,
//     },
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// // export default Footer;

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
