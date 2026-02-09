import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExploreScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    router.push({
                        pathname: "/details",
                        params: { title: "Depuis explorer" }
                    })
                }>
                    <Text style={styles.buttonText}>Voir les détails</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 60,
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: "#007AFF"
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 16
    },

    content: {
        flex: 1,
        padding: 20,
        alignItems:"center",
        justifyContent:"center"
    },

    description: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
        paddingHorizontal: 20
    },

    backButton: {
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: 0
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#666",
        marginBottom: 20
    },

    button: {
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: 0
    },

    buttonText: {
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: 0
    }
});