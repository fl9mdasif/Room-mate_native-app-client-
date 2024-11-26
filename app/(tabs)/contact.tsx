import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ContactPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Image */}
            <View style={styles.header}>
                <Text style={styles.title}>Contact Us</Text>
                <Image
                    source={{ uri: 'https://img.freepik.com/premium-vector/customer-support-concepts_662093-1854.jpg?semt=ais_hybrid' }}
                    style={styles.headerImage}
                />
            </View>

            {/* Organization Description */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Dhaka Rent is dedicated to helping you find reliable roommates in Dhaka.
                    Our platform ensures a seamless and trustworthy way to connect with potential roommates and rentals.
                </Text>
            </View>

            {/* Contact Inputs */}
            <View style={styles.inputContainer}>
                <MaterialIcons name="person-outline" size={20} color="#666" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#666" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="phone" size={20} color="#666" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Mobile" placeholderTextColor="#666" />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons name="message" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Message"
                    placeholderTextColor="#666"
                    multiline={true}
                    numberOfLines={4}
                />
            </View>

            {/* Social Links */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="facebook" size={24} color="#4267B2" />
                    <Text style={styles.socialText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="linkedin" size={24} color="#0077B5" />
                    <Text style={styles.socialText}>LinkedIn</Text>
                </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: -10,
        opacity: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,

    },
    descriptionContainer: {
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    socialText: {
        fontSize: 16,
        color: '#0077B5',
        marginLeft: 5,
    },
    submitButton: {
        backgroundColor: '#4A90E2',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default ContactPage;
