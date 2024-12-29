

import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Animated } from "react-native";
import { getAllFlats } from "@/api/flatApi";
import { addFlatToFavorite } from "@/api/userApi";
import { Flat } from "@/types";
import { useUser } from "@clerk/clerk-expo";

const Flats = () => {
    const [flats, setFlats] = useState<Flat[]>([]);
    const [selectedFlat, setSelectedFlat] = useState<Flat | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const slideAnim = useRef(new Animated.Value(-300)).current; // Slide animation from left
    const { user } = useUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress as string;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await getAllFlats();
                setFlats(res);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const openDetails = (flat: Flat) => {
        setSelectedFlat(flat);
        Animated.timing(slideAnim, {
            toValue: 0, // Slide in to view
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeDetails = () => {
        Animated.timing(slideAnim, {
            toValue: -300, // Slide out of view
            duration: 300,
            useNativeDriver: true,
        }).start(() => setSelectedFlat(null));
    };

    const addToFavorite = async (flatId: string) => {
        const res = await addFlatToFavorite(userEmail, flatId);
        console.log(res);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Available Spaces</Text>
            <FlatList
                data={flats}
                keyExtractor={(item) => item._id}
                numColumns={2}
                contentContainerStyle={styles.flatContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.images }} style={styles.image} />
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{item.residentType}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            <Text style={styles.price}>৳{item.rent}</Text>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableOpacity style={styles.button} onPress={() => openDetails(item)}>
                                <Text style={styles.buttonText}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => addToFavorite(item._id)}>
                                <Text style={styles.buttonText}>Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Detail View */}
            {selectedFlat && (
                <Animated.View style={[styles.detailBox, { transform: [{ translateX: slideAnim }] }]}>
                    <Image source={{ uri: selectedFlat.images }} style={styles.detailImage} />
                    <Text style={styles.detailTitle}>{selectedFlat.residentType}</Text>
                    <Text style={styles.detailText}>{selectedFlat.location}</Text>
                    <Text style={styles.detailText}>৳{selectedFlat.rent}</Text>
                    <Text style={styles.detailDescription}>{selectedFlat.description}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={closeDetails}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    );
};

export default Flats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f9f9f9",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#0d0551",
    },
    flatContainer: {
        justifyContent: "space-between",
    },
    card: {
        width: "47%",
        backgroundColor: "#ffffff",
        marginBottom: 15,
        marginRight: 5,
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 120,
        resizeMode: "cover",
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333333",
    },
    location: {
        fontSize: 14,
        color: "#666666",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0d0551",
    },
    buttonBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#0d0551",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
    },
    detailBox: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ffffff",
        padding: 20,
        elevation: 5,
        zIndex: 10,
    },
    detailImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
    },
    detailDescription: {
        fontSize: 14,
        color: "#555555",
        marginTop: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: "#FF4136",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
    },
});
