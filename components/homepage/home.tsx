import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Button,
} from "react-native";
import DemoCards from "../flats/Flats"; // Ensure DemoCards has responsive styles
import { useClerk } from "@clerk/clerk-expo";

const HomePage = () => {

    const { signOut } = useClerk();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Background Image */}
            <ImageBackground
                source={require("../../assets/images/room-bg.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                {/* Overlay */}
                <View style={styles.overlay}>
                    {/* Input Fields Section */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tenant Type"
                            placeholderTextColor="#0d0551"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Location"
                            placeholderTextColor="#0d0551"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Resident"
                            placeholderTextColor="#0d0551"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Rent Amount"
                            placeholderTextColor="#0d0551"
                        />
                        <TouchableOpacity style={styles.findButton}>
                            <Text style={styles.findButtonText}>Find</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Popular Places Section */}
            <View style={styles.popularPlacesContainer}>
                <Text style={styles.sectionTitle}>
                    Popular places to rent in Dhaka                     <Button title="Sign Out" onPress={() => signOut()} color="#ff5c5c" />

                </Text>
                <View style={styles.buttonGrid}>
                    {[
                        "Male Shared Room",
                        "Female Shared Room",
                        "Male Hostel",
                        "Female Hostel",
                        "2BHK Apartment",
                        "3BHK Apartment",
                        "4BHK Apartment",
                        "Sublet for Family",
                    ].map((place, index) => (
                        <TouchableOpacity key={index} style={styles.popularButton}>
                            <Text style={styles.popularButtonText}>{place}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* DemoCards Component */}
            <View style={styles.demoCardsContainer}>
                <DemoCards />
            </View>
        </ScrollView>
    );
};

export default HomePage;

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
        backgroundColor: "rgba(13, 5, 81, 0.5)", // Dark overlay
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "90%",
        padding: 20,
    },
    input: {
        backgroundColor: "rgba(221, 220, 230, 0.842)", // Semi-transparent input background
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
    popularPlacesContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0d0551",
        marginBottom: 10,
    },
    buttonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    popularButton: {
        backgroundColor: "#a382ff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
        width: "48%",
    },
    popularButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    demoCardsContainer: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
});
