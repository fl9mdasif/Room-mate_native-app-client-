import * as React from 'react'
import { TextInput, Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

export default function Page() {
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()

    const [emailAddress, setEmailAddress] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return
        }

        try {
            await signUp.create({
                emailAddress,
                password,
                firstName,
                lastName,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setPendingVerification(true)
        } catch (err: any) {
            console.error("Error during sign-up:", err)
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) {
            return
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                router.replace('/')
            } else {
                console.error("Verification failed:", completeSignUp)
            }
        } catch (err: any) {
            console.error("Error during email verification:", err)
        }
    }

    return (
        <LinearGradient
            colors={['#30e9ff', '#0d0551']} // Gradient colors
            start={{ x: 0, y: 0 }} // Gradient start position
            end={{ x: 1, y: 1 }}   // Gradient end position
            style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Create Your Account</Text>

                {!pendingVerification && (
                    <>
                        <TextInput
                            autoCapitalize="words"
                            value={firstName}
                            placeholder="First Name"
                            onChangeText={(firstName) => setFirstName(firstName)}
                            style={styles.input}
                        />

                        <TextInput
                            autoCapitalize="words"
                            value={lastName}
                            placeholder="Last Name"
                            onChangeText={(lastName) => setLastName(lastName)}
                            style={styles.input}
                        />

                        <TextInput
                            autoCapitalize="none"
                            value={emailAddress}
                            placeholder="Email Address"
                            onChangeText={(email) => setEmailAddress(email)}
                            style={styles.input}
                        />

                        <TextInput
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </>
                )}

                {pendingVerification && (
                    <>
                        <TextInput
                            value={code}
                            placeholder="Verification Code"
                            onChangeText={(code) => setCode(code)}
                            style={styles.input}
                        />
                        <Button title="Verify Email" onPress={onPressVerify} color="#0d0551" />
                    </>
                )}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        backgroundColor: "#4b70a8e7",
        padding: 30,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
    },
    input: {
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#f1f1f1',
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#0d0551",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#ff7d13",
        fontSize: 16,
        fontWeight: "600",
    },
})
