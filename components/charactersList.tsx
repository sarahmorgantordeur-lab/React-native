import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { fetchCharacters, getImageUrl } from "@/api/simpsons";

interface Character {
  id: number;
  name: string;
  portrait_path: string;
  occupation: string;
  gender: string;
  age: number | null;
  status: string;
}

export default function CharactersList() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCharacters()
      .then(resp => setData(resp))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
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
            style={{ width: 80, height: 80, borderRadius: 40, marginRight: 12 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
