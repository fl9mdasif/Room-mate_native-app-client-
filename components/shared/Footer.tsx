

import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const Footer = () => {

    return (
        <div style={styles.footer}>
            <Link style={styles.link} href={'/'}>Home</Link>
            <Link style={styles.link} href={'/contact'}>contacr</Link>
            <Link style={styles.link} href={'/about'}>About</Link>
        </div>
    )
};

export default Footer

const styles = StyleSheet.create({
    footer: {
        position: 'relative',
        height: 25,
        backgroundColor: '#d0e7ff',
        width: "100%",
        flex: 1,
        justifyContent: 'space-between'
        // borderTopWidth: 0.5,
        // borderTopColor: '#ccc',
    },
    link: {
        fontSize: 13,
        paddingBottom: 5,
        backgroundColor: '#b984ff',
        padding: 5,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// export default Footer;
