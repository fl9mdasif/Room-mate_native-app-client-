import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import DemoCards from "../flats/Flats";
import HomeForm from "../shared/forms/homeForm";
import HomeFilter from "../shared/filter/homeFilter";

const HomePage = () => {


    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/* home input */}
            <HomeForm />

            {/* HomeFilter  */}
            <HomeFilter />
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

    // popularPlacesContainer: {
    //     flex: 1,
    //     marginTop: 20,
    //     paddingHorizontal: 20,
    // },
    // sectionTitle: {
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     color: "#0d0551",
    //     marginBottom: 10,
    // },
    // buttonGrid: {
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-between",
    // },
    // popularButton: {
    //     backgroundColor: "#a382ff",
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     borderRadius: 8,
    //     marginBottom: 10,
    //     alignItems: "center",
    //     width: "48%",
    // },
    // popularButtonText: {
    //     color: "#ffffff",
    //     fontSize: 14,
    //     fontWeight: "500",
    //     textAlign: "center",
    // },
    demoCardsContainer: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
});
