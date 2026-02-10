import { useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Character, fetchCharacters, getImageUrl } from "@/api/simpsons";
import { SIMPSONS } from "@/constants/theme";

export default function PersoScreen() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const nextUrl = useRef<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCharacters()
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
    fetchCharacters(nextUrl.current)
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
              pathname: "/charactersDetail",
              params: {
                name: item.name,
                image: getImageUrl(item.portrait_path),
                occupation: item.occupation,
                gender: item.gender,
                age: item.age?.toString() ?? "",
                status: item.status,
              },
            })
          }
        >
          <Image
            source={{ uri: getImageUrl(item.portrait_path) }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.occupation}>{item.occupation}</Text>
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
    borderLeftColor: SIMPSONS.yellow,
  },
  separator: {
    height: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: SIMPSONS.yellow,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: SIMPSONS.darkBlue,
  },
  occupation: {
    fontSize: 13,
    color: SIMPSONS.brown,
    marginTop: 3,
  },
});
