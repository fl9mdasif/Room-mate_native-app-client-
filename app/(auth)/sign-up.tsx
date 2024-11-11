import * as React from 'react'
import { TextInput, Button, View, Text, StyleSheet, ScrollView } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

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
        <ScrollView contentContainerStyle={styles.container}>
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

                        <Button title="Sign Up" onPress={onSignUpPress} color="#007BFF" />
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
                        <Button title="Verify Email" onPress={onPressVerify} color="#28a745" />
                    </>
                )}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <Button title="Sign In" onPress={() => router.push('/sign-in')} color="#6c757d" />
                </View>
            </View>
        </ScrollView>
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
        backgroundColor: '#fff',
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
        color: '#333',
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
        color: '#6c757d',
        marginBottom: 10,
    },
})
