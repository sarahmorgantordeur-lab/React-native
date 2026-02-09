import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function AboutScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Button title="Go to index" onPress={() => router.push("/")} />
        </View>
    );
}
