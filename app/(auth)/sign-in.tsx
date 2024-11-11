import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()

    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            })

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/')
            } else {
                // See https://clerk.com/docs/custom-flows/error-handling
                // for more info on error handling
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2))
        }
    }, [isLoaded, emailAddress, password])

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Sign In</Text>

                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                />

                {/* Password Input */}
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                {/* Sign In Button */}
                <TouchableOpacity style={styles.button} onPress={onSignInPress}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                {/* Link to Sign Up */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <Link href="/(auth)/sign-up">
                        <Text style={styles.linkText}>Sign up</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
    },
    formContainer: {
        width: "100%",
        maxWidth: 400,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 15,
        backgroundColor: "#f9f9f9",
    },
    button: {
        backgroundColor: "#4a90e2",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    footer: {
        alignItems: "center",
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: "#777",
    },
    linkText: {
        fontSize: 16,
        color: "#4a90e2",
        fontWeight: "500",
        marginTop: 5,
    },
});