import { SIMPSONS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Simpsons</Text>
      <Text style={styles.subtitle}>Bienvenue dans Springfield !</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => router.push("/(tabs)/perso")}>
          <Ionicons name="people" size={40} color={SIMPSONS.orange} />
          <Text style={styles.cardText}>Personnages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/(tabs)/episodes")}>
          <Ionicons name="tv" size={40} color={SIMPSONS.orange} />
          <Text style={styles.cardText}>Episodes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/(tabs)/locations")}>
          <Ionicons name="map" size={40} color={SIMPSONS.orange} />
          <Text style={styles.cardText}>Lieux</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SIMPSONS.beige,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: SIMPSONS.yellow,
    textShadowColor: SIMPSONS.brown,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: SIMPSONS.brown,
    marginBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: SIMPSONS.white,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: 150,
    borderWidth: 2,
    borderColor: SIMPSONS.yellow,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: SIMPSONS.coolorange,
  },
});
