import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

const AboutPage = () => {
    return (
        <ImageBackground
            source={require('../assets/images/bg-img.png')} // Replace with your logo
            style={styles.backgroundImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                {/* Logo Section */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/bg-img.png')} // Replace with your logo
                        style={styles.logo}
                    />
                    <Text style={styles.appName}>Room Mate Finder</Text>
                </View>

                {/* Introduction Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>About Us</Text>
                    <Text style={styles.sectionText}>
                        Room Mate Finder is your trusted companion in finding the perfect place to stay
                        and the ideal roommate to share your journey with. Whether you’re moving to a
                        new city or looking for someone to share your current space, we make the process
                        simple, reliable, and stress-free.
                    </Text>
                </View>

                {/* Features Section */}
                <View style={styles.featuresContainer}>
                    <View style={styles.featureBox}>
                        <Image
                            source={require('../assets/images/bg-img.png')} // Replace with your logo
                            style={styles.featureIcon}
                        />
                        <Text style={styles.featureTitle}>Find Your Room</Text>
                        <Text style={styles.featureDescription}>
                            Browse through verified listings to find a room that suits your needs and budget.
                        </Text>
                    </View>
                    <View style={styles.featureBox}>
                        <Image
                            source={require('../assets/images/bg-img.png')} // Replace with your logo
                            style={styles.featureIcon}
                        />
                        <Text style={styles.featureTitle}>Find a Roommate</Text>
                        <Text style={styles.featureDescription}>
                            Connect with like-minded individuals looking for roommates.
                        </Text>
                    </View>
                </View>

                {/* Mission Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Our Mission</Text>
                    <Text style={styles.sectionText}>
                        At Room Mate Finder, we aim to create a safe and user-friendly platform that connects
                        people and homes effortlessly. We prioritize trust, security, and community in every
                        interaction.
                    </Text>
                </View>

                {/* Contact Information */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Contact Us</Text>
                    <Text style={styles.contactText}>📧 Email: contact@roommatefinder.com</Text>
                    <Text style={styles.contactText}>📞 Phone: +880-1234-567-890</Text>
                    <Text style={styles.contactText}>🌐 Website: www.roommatefinder.com</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default AboutPage;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    },
    section: {
        backgroundColor: '#ffffffcc', // Semi-transparent white
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featureBox: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    featureIcon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    contactText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
    },
});
