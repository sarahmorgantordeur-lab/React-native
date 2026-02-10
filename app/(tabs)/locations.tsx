import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Location, fetchLocations, getImageUrl } from "@/api/simpsons";
import { SIMPSONS } from "@/constants/theme";

export default function LocationsScreen() {
  const [data, setData] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const nextUrl = useRef<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchLocations()
      .then(resp => {
        setData(resp.results);
        nextUrl.current = resp.next;
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const loadMore = useCallback(() => {
    if (!nextUrl.current || loadingMore) return;
    setLoadingMore(true);
    fetchLocations(nextUrl.current)
      .then(resp => {
        setData(prev => [...prev, ...resp.results]);
        nextUrl.current = resp.next;
      })
      .catch(console.error)
      .finally(() => setLoadingMore(false));
  }, [loadingMore]);

  if (loading) return <ActivityIndicator size="large" color={SIMPSONS.orange} style={{ flex: 1, backgroundColor: SIMPSONS.beige }} />;

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color={SIMPSONS.orange} style={{ padding: 16 }} /> : null}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.row}
          onPress={() =>
            router.push({
              pathname: "/locationsDetail",
              params: {
                name: item.name,
                image: getImageUrl(item.image_path),
                town: item.town,
                use: item.use,
              },
            })
          }
        >
          <Image
            source={{ uri: getImageUrl(item.image_path) }}
            style={styles.thumbnail}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.badge}>
              <Ionicons name="location-outline" size={12} color={SIMPSONS.orange} />
              <Text style={styles.meta}> {item.town}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: SIMPSONS.beige,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: SIMPSONS.white,
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: SIMPSONS.pink,
  },
  separator: {
    height: 2,
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: SIMPSONS.darkBlue,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  meta: {
    fontSize: 13,
    color: SIMPSONS.brown,
  },
});
