import { SIMPSONS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EpisodesDetailScreen() {
  const router = useRouter();
  const { name, season, episode_number, airdate, synopsis, image } =
    useLocalSearchParams<{
      name: string;
      season: string;
      episode_number: string;
      airdate: string;
      synopsis: string;
      image: string;
    }>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color={SIMPSONS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{name}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Ionicons name="tv-outline" size={14} color={SIMPSONS.white} />
            <Text style={styles.badgeText}> S{season}E{episode_number}</Text>
          </View>
          {airdate ? (
            <View style={styles.badge}>
              <Ionicons name="calendar-outline" size={14} color={SIMPSONS.white} />
              <Text style={styles.badgeText}> {airdate}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.card}>
          <Text style={styles.synopsisTitle}>Synopsis</Text>
          <Text style={styles.synopsis}>{synopsis}</Text>
        </View>
      </ScrollView>
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
    backgroundColor: SIMPSONS.coolorange,
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
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: SIMPSONS.blue,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: SIMPSONS.coolorange,
    textAlign: "center",
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: SIMPSONS.orange,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: SIMPSONS.white,
    fontWeight: "bold",
    fontSize: 13,
  },
  card: {
    backgroundColor: SIMPSONS.white,
    borderRadius: 16,
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: SIMPSONS.yellow,
  },
  synopsisTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: SIMPSONS.coolorange,
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 15,
    color: SIMPSONS.gray,
    lineHeight: 24,
  },
});
