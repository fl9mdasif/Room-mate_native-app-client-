import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomeAuth = () => {
    const { user } = useUser();
    const { signOut } = useClerk();

    console.log(user)

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>ROOM MATE</Text>
                <Text style={styles.headerText}>DHAKA RENT</Text>
            </View>

            {/* Auth Section */}
            <View style={styles.authContainer}>
                <SignedIn>
                    <Text style={styles.greetingText}>Hello, {user?.emailAddresses[0].emailAddress}</Text>
                    {/* signout  */}
                    <Button title="Sign Out" onPress={() => signOut()} color="#ff5c5c" />

                </SignedIn>

                <SignedOut>
                    <TouchableOpacity style={styles.authButton}>
                        <Link href="/(auth)/sign-in" style={styles.authButtonText}>Sign In</Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authButton}>
                        <Link href="/(auth)/sign-up" style={styles.authButtonText}>Sign Up</Link>
                    </TouchableOpacity>
                </SignedOut>
            </View>
        </View>
    );
};

export default HomeAuth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f4f8",
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logoText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#4a90e2",
    },
    headerText: {
        fontSize: 20,
        color: "#333333",
        marginTop: 5,
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
        backgroundColor: "#4a90e2",
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
