import { Text } from "react-native"
import { TextInput, TouchableOpacity, ImageBackground, View, StyleSheet } from "react-native"
import { } from "react-native-gesture-handler"

const HomeForm = () => {


    return (
        <div>

            <ImageBackground
                source={require("../../../assets/images/room-bg.png")}
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

        </div>
    )
}

export default HomeForm


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
    }
})