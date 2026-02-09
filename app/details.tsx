import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ id?: string; title?: string }>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Details</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    Cette page est accessible via la navigation stack, pas par les onglets
                </Text>
            </View>
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
});