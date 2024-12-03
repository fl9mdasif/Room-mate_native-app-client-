import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const DemoCards = () => {
    // Sample data for flats, rooms, and spaces
    const demoData = [
        {
            id: "1",
            title: "2BHK Apartment",
            location: "Banani, Dhaka",
            price: "৳25,000/month",
            image: require("../../assets/images/room-images/room-1.jpg"), // Replace with your image path
        },
        {
            id: "2",
            title: "Shared Room for Male",
            location: "Dhanmondi, Dhaka",
            price: "৳5,000/month",
            image: require("../../assets/images/room-images/room-2.jpg"),
        },
        {
            id: "3",
            title: "Female Hostel",
            location: "Uttara, Dhaka",
            price: "৳8,000/month",
            image: require("../../assets/images/room-images/room-3.jpg"),
        },
        {
            id: "4",
            title: "3BHK Apartment",
            location: "Gulshan, Dhaka",
            price: "৳40,000/month",
            image: require("../../assets/images/room-images/room-4.jpg"),
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Available Spaces</Text>
            <FlatList
                data={demoData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default DemoCards;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 7,
        width: 390,
        flexDirection: "row", // Display items in a row
        flexWrap: "wrap",

    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0d0551",
        marginBottom: 10,
    },
    card: {
        width: 180,
        marginRight: 15,
        borderRadius: 10,
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
