import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIMPSONS } from "@/constants/theme";

export default function CharactersDetailScreen() {
  const router = useRouter();
  const { name, image, occupation, gender, age, status } = useLocalSearchParams<{
    name: string;
    image: string;
    occupation: string;
    gender: string;
    age: string;
    status: string;
  }>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color={SIMPSONS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{name}</Text>
      </View>

      <View style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>

        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Ionicons name="briefcase" size={18} color={SIMPSONS.orange} />
            <Text style={styles.infoText}>{occupation}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="person" size={18} color={SIMPSONS.orange} />
            <Text style={styles.infoText}>{gender}</Text>
          </View>
          {age ? (
            <View style={styles.infoRow}>
              <Ionicons name="calendar" size={18} color={SIMPSONS.orange} />
              <Text style={styles.infoText}>{age} ans</Text>
            </View>
          ) : null}
          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <Ionicons name="heart" size={18} color={SIMPSONS.orange} />
            <Text style={styles.infoText}>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SIMPSONS.beige,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: SIMPSONS.darkBlue,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: SIMPSONS.white,
    marginLeft: 14,
    flex: 1,
  },
  backButton: {
    padding: 8,
    backgroundColor: SIMPSONS.orange,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: SIMPSONS.yellow,
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: SIMPSONS.darkBlue,
    marginBottom: 20,
  },
  card: {
    backgroundColor: SIMPSONS.white,
    borderRadius: 16,
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: SIMPSONS.yellow,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: SIMPSONS.lightGray,
  },
  infoText: {
    fontSize: 16,
    color: SIMPSONS.gray,
    marginLeft: 12,
  },
});
