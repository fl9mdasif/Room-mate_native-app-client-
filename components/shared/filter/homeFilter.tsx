import { useClerk } from "@clerk/clerk-expo";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeFilter = () => {
    const { signOut } = useClerk();

    return (

        <div>

            {/* Popular Places Section */}
            <View style={styles.popularPlacesContainer}>
                <Text style={styles.sectionTitle}>
                    Popular places to rent in Dhaka
                    <Button title="Sign Out" onPress={() => signOut()} color="#ff5c5c" />

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


        </div>
    )
}

export default HomeFilter;

const styles = StyleSheet.create({


    popularPlacesContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
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

});
