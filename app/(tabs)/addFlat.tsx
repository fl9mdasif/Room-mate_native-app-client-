import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { createFlat } from '@/api/flatApi';

const AddFlats: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [bed, setBed] = useState<string>('');
    const [residentType, setResidentType] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [rent, setRent] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [utilitiesIncluded, setUtilitiesIncluded] = useState<string>('');
    const [images, setImages] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    const handleAddFlat = async () => {
        setLoading(true);
        console.log('console', title,
            location, duration, bed, residentType, description, address, rent,
            area, utilitiesIncluded, images)
        try {
            const response = await createFlat(
                title,
                location,
                duration,
                bed,
                residentType,
                description,
                address,
                rent,
                area,
                utilitiesIncluded,
                images,
            );

            // Handle successful response, e.g., show success message, navigate to another screen
            console.log('Flat added successfully:', response);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong while adding the flat. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter flat name"
                    placeholderTextColor="#7c7c7c"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter location"
                    placeholderTextColor="#7c7c7c"
                    value={location}
                    onChangeText={setLocation}
                />
                {/* Add more TextInput fields for other properties */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter duration"
                    placeholderTextColor="#7c7c7c"
                    value={duration}
                    onChangeText={setDuration}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter bed"
                    placeholderTextColor="#7c7c7c"
                    value={bed}
                    onChangeText={setBed}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter residentType"
                    placeholderTextColor="#7c7c7c"
                    value={residentType}
                    onChangeText={setResidentType}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    placeholderTextColor="#7c7c7c"
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter address"
                    placeholderTextColor="#7c7c7c"
                    value={address}
                    onChangeText={setAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter rent"
                    placeholderTextColor="#7c7c7c"
                    value={rent}
                    onChangeText={setRent}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter area"
                    placeholderTextColor="#7c7c7c"
                    value={area}
                    onChangeText={setArea}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter utilitiesIncluded"
                    placeholderTextColor="#7c7c7c"
                    value={utilitiesIncluded}
                    onChangeText={setUtilitiesIncluded}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter image URL"
                    value={images} // Access the first image URL
                    onChangeText={setImages}
                />


                <TouchableOpacity
                    style={[styles.findButton, loading && { backgroundColor: '#ccc' }]}
                    onPress={handleAddFlat}
                    disabled={loading}
                >
                    <Text style={styles.findButtonText}>{loading ? 'Adding...' : 'Add Flat'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// ... (Rest of the code)
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f5f5f5",
    },
    backgroundImage: {
        width: "100%",
        height: 350,
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(13, 5, 81, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "90%",
        padding: 20,
        alignSelf: "center",
    },
    input: {
        backgroundColor: "rgba(221, 220, 230, 0.842)",
        color: "#0f162c",
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        fontSize: 16,
    },
    findButton: {
        backgroundColor: "#0d0551",
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    findButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default AddFlats;
