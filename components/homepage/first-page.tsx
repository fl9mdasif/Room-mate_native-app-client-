import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Image } from "react-native";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'; // If using Expo
import { useEffect } from "react";
// import LinearGradient from 'react-native-linear-gradient'; // If not using Expo


const FirstPage = () => {
    const { signOut } = useClerk();
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        // if (user) {
        //     // If user is signed in, navigate to the Home Tab
        //     router.replace("/(tabs)/contact");
        // }
    }, [user]);
    console.log(user)
    return (
        <LinearGradient

            colors={['#30e9ff', '#0d0551']} // Gradient colors
            start={{ x: 0, y: 0 }} // Gradient start position
            end={{ x: 1, y: 1 }}   // Gradient end position
            style={styles.container}
        >
            {/* Header Section */}


            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/images/app-logo.png')} />
                <Text style={styles.logoText}>ROOM MATE</Text>
                <Text style={styles.paragraph}>Searching for your ideal space? Find your perfect space with us

                </Text>
            </View>

            {/* Auth Section */}
            <View style={styles.authContainer}>

                <SignedIn>
                    <Text style={styles.greetingText}>Hello, {user?.emailAddresses[0].emailAddress}</Text>

                    <Button title="Sign Out" onPress={() => signOut()} color="#ff5c5c" />
                </SignedIn>

                <SignedOut>
                    <TouchableOpacity style={styles.authButton}>
                        <Link href="/(auth)/sign-in" style={styles.authButtonText}>SIGN IN</Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authButton}>
                        <Link href="/(auth)/sign-up" style={styles.authButtonText}>SIGN UP</Link>
                    </TouchableOpacity>
                </SignedOut>
            </View>
        </LinearGradient>
    );
};

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // // paddingTop: 100,
        // justifyContent: "start",
        // alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f4f8",
        paddingHorizontal: 20,
    },
    logoContainer: {
        // width: 30,
        marginTop: 40,
        alignItems: "center",
        // marginBottom: 20,
    },
    logo: {
        width: 250,
        height: 250
    },
    logoText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
    },
    paragraph: {
        fontSize: 19,
        color: "#ffffff",
        padding: 8,
        marginTop: 30,
        textAlign: 'center',
        fontWeight: "600",
    },
    authContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 30,
    },
    greetingText: {
        fontSize: 18,
        color: "#333333",
        marginBottom: 15,
        fontWeight: "500",
    },
    authButton: {
        width: "80%",
        backgroundColor: "#0d0551",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 8,
    },
    authButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
});
