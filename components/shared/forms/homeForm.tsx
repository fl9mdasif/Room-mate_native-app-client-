import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    View,
    StyleSheet,
    FlatList,
    Image,
} from "react-native";
import axios from "axios";

interface Flat {
    _id: string;
    duration: string;
    location: string;
    residentType: string;
    description: string;
    address: string;
    rent: string;
    area: string;
    utilitiesIncluded: string;
    images: string;
}

const HomeForm: React.FC = () => {
    const [duration, setDuration] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [residentType, setResidentType] = useState<string>("");
    const [rent, setRent] = useState<string>("");
    const [flats, setFlats] = useState<Flat[]>([]);

    const findFlats = async () => {
        try {
            const response = await axios.get<Flat[]>("http://localhost:5000/api/flats", {
                params: {
                    duration,
                    location,
                    residentType,
                    rent,
                },
            });
            setFlats(response.data);
        } catch (error) {
            console.error("Error fetching flats:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../../assets/images/room-bg.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <View style={styles.inputContainer}>
                        <TextInput

                            style={styles.input}
                            placeholder="Duration"
                            placeholderTextColor="#0d0551"
                            value={duration}
                            onChangeText={setDuration}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Location"
                            placeholderTextColor="#0d0551"
                            value={location}
                            onChangeText={setLocation}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Resident Type"
                            placeholderTextColor="#0d0551"
                            value={residentType}
                            onChangeText={setResidentType}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Rent Amount (Max)"
                            placeholderTextColor="#0d0551"
                            keyboardType="numeric"
                            value={rent}
                            onChangeText={setRent}
                        />
                        <TouchableOpacity style={styles.findButton} onPress={findFlats}>
                            <Text style={styles.findButtonText}>Find</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.flatList}>
                {flats.length === 0 ? (
                    <Text style={styles.noFlatText}>No flat found</Text>
                ) : (
                    <FlatList
                        data={flats}
                        keyExtractor={(item) => item._id}
                        numColumns={2}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={({ item }) => (
                            <View style={styles.flatCard}>
                                <Image source={{ uri: item.images }} style={styles.image} />
                                <Text style={styles.flatText}>Location: {item.location}</Text>
                                <Text style={styles.flatText}>Duration: {item.duration}</Text>
                                <Text style={styles.flatText}>Rent: {item.rent}</Text>
                                <Text style={styles.flatText}>
                                    Resident Type: {item.residentType}
                                </Text>
                                <Text style={styles.flatDetails}>
                                    {item.location} - ৳{item.rent}
                                </Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </View>
    );
};

export default HomeForm;

const styles = StyleSheet.create({
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
    flatList: {
        flex: 1,
        padding: 10,
    },
    flatListContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    flatCard: {
        backgroundColor: "#ffffff",
        margin: 5,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "100%",
    },
    flatText: {
        fontSize: 14,
        color: "#333333",
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    flatDetails: {
        fontSize: 14,
        color: "#555",
    },
    noFlatText: {
        textAlign: "center",
        fontSize: 16,
        color: "#555",
        marginTop: 20,
    },
});
