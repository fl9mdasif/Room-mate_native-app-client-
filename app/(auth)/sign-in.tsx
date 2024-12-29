import { useSignIn, useUser } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const { user } = useUser();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false); // State for loading indicator

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) return;

        setLoading(true); // Start loading
        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            console.log('Sign-in response:', signInAttempt);

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                setLoading(false); // Stop loading
                router.push('/'); // Navigate to a dashboard or homepage
            } else {
                console.error('Sign-in not completed:', JSON.stringify(signInAttempt, null, 2));
                setLoading(false); // Stop loading
            }
        } catch (err: any) {
            console.error('Sign-in error:', JSON.stringify(err, null, 2));
            setLoading(false); // Stop loading
        }
    }, [isLoaded, emailAddress, password, user]);

    return (
        <LinearGradient
            colors={['#30e9ff', '#0d0551']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
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
                <TouchableOpacity
                    style={[styles.button, loading && { backgroundColor: '#cccccc' }]}
                    onPress={onSignInPress}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Sign In</Text>
                    )}
                </TouchableOpacity>

                {/* Link to Sign Up */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <Link href="/(auth)/sign-up">
                        <Text style={styles.linkText}>Sign up</Text>
                    </Link>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: '#4b70a8e7',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 15,
        backgroundColor: '#dbe9f1de',
    },
    button: {
        backgroundColor: '#0d0551',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#ffffff',
    },
    linkText: {
        fontSize: 16,
        color: '#ff7d13',
        fontWeight: '500',
        marginTop: 5,
    },
});
