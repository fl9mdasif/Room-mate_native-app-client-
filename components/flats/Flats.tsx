import { getAllFlats } from "@/api/flatApi";
import { addFlatToFavorite } from "@/api/userApi";
// import { addToFavorite } from "@/api/userApi";
import { Flat } from "@/types";
import { ClerkLoading, useUser } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const Flats = () => {
    // Sample data for flats, rooms, and spaces
    const [flats, setFlats] = useState<Flat[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUser(); // Get user info from Clerk

    const userEmail = user?.primaryEmailAddress?.emailAddress as string;


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await getAllFlats();
                setFlats(res);
                console.log(res)
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // getAllFlats()

    console.log(flats)


    const addToFavorite = async (flatId: string) => {

        const res = await addFlatToFavorite(userEmail, flatId)
        console.log(res)

    }

    return (
        <View >
            <Text style={styles.sectionTitle}>Available Spaces</Text>

            <View style={styles.flatContainer}>

                {flats && flats.map((item) => (
                    <TouchableOpacity key={item._id} style={styles.card}>
                        <Image source={item.images} style={styles.image} />
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            <Text style={styles.price}>{item.rent}</Text>
                        </View>

                        <View style={styles.buttonBox}>

                            <TouchableOpacity style={styles.button} onPress={() => addToFavorite(item._id)}>
                                <Text style={styles.buttonText}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => addToFavorite(item._id)}>
                                <Text style={styles.buttonText}>Cart</Text>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Flats;

const styles = StyleSheet.create({
    flatContainer: {

        margin: 0,
        padding: 10,
        width: 380, // Adjust the width as needed
        flexDirection: 'row', // Display items in a row
        flexWrap: 'wrap', // Wrap items to multiple rows if necessary
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center' // Center items vertically

    },
    sectionTitle: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: "bold",
        color: "#0d0551",
        marginBottom: 10,
    },
    card: {
        flex: 1,
        width: 200,
        marginRight: 5,
        borderRadius: 10,
        // flexDirection: "row", // Display items in a row

        overflow: "hidden",
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 180,
        height: 120,
        resizeMode: "cover",
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    button: {
        backgroundColor: "#0d0551",
        paddingVertical: 5,
        width: 45,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonBox: {
        flex: 1,
        flexDirection: "row",
        gap: 5,
        justifyContent: 'center'
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
});
