import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function CharacterDetail() {
  const { name, image, description } = useLocalSearchParams<{
    name: string;
    image: string;
    description: string;
  }>();

  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}
