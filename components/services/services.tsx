import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

type RoomData = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor: string;
};

const Flats = () => {
    // Sample data for services with icons

    const demoData: RoomData[] = [
        {
            id: "1",
            title: "Single Room",
            description: "Ideal for a solo bachelor looking for privacy.",
            icon: <MaterialIcons name="single-bed" size={32} color="white" />,
            backgroundColor: "#0d0551",
        },
        {
            id: "2",
            title: "Shared Room",
            description: "Affordable shared spaces for male/female.",
            icon: <FontAwesome5 name="users" size={32} color="white" />,
            backgroundColor: "#00796b",
        },
        {
            id: "3",
            title: "Single Seat",
            description: "Comfortable seating for an individual guest.",
            icon: <Ionicons name="person-circle-outline" size={32} color="white" />,
            backgroundColor: "#283593",
        },
        {
            id: "4",
            title: "Double Seat",
            description: "Spacious seating option for two guests.",
            icon: <MaterialIcons name="weekend" size={32} color="white" />,
            backgroundColor: "#bf360c",
        },
        {
            id: "5",
            title: "Guest Mode",
            description: "Flexible accommodation for short stays.",
            icon: <FontAwesome5 name="user-check" size={32} color="white" />,
            backgroundColor: "#4caf50",
        },
        {
            id: "6",
            title: "Security",
            description: "Ensuring 24/7 safety for all tenants.",
            icon: <Ionicons name="shield-checkmark" size={32} color="white" />,
            backgroundColor: "#9e9d24",
        },
        {
            id: "7",
            title: "VIP Guests",
            description: "Luxurious spaces for premium guests.",
            icon: <FontAwesome5 name="crown" size={32} color="white" />,
            backgroundColor: "#6a1b9a",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Popular Services</Text>
            <FlatList
                data={demoData}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={styles.rowWrapper}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.card, { backgroundColor: item.backgroundColor }]}>
                        <View style={styles.iconContainer}>{item.icon}</View>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Flats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        // padding: 10,
        backgroundColor: "#f5f5f5",
    },
    sectionTitle: {
        fontSize: 20,
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: "bold",
        color: "#0d0551",
        marginBottom: 10,
    },
    rowWrapper: {
        justifyContent: "space-between",
        marginBottom: 15,
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    iconContainer: {
        alignItems: "center",
        marginBottom: 10,
    },
    cardContent: {
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#e0e0e0",
        textAlign: "center",
    },
});
