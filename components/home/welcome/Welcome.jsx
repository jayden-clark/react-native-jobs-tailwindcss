import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const handlePress = (item) => () => {
    setActiveJobType(item);
    router.push(`/search/${item}`);
  };

  return (
    <View>
      <View className="w-full">
        <Text className="font-sans text-xl text-gray-700">Hello Jayden</Text>
        <Text className="font-bold text-2xl text-purple-900 mt-0.5">
          Find your perfect job
        </Text>
      </View>

      <View className="flex justify-center items-center flex-row mt-5 h-12">
        <View className="flex-1 bg-gray-200 mr-2.5 justify-center items-center rounded-2xl h-full">
          <TextInput
            className="font-sans w-full h-full px-4"
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          ></TextInput>
        </View>
        <TouchableOpacity
          className="w-12 h-full bg-red-500 rounded-2xl flex justify-center items-center"
          onPress={() => {}}
        >
          <Image
            className="w-1/2 h-1/2"
            source={icons.search}
            resizeMode="contain"
            style={{ tintColor: "#F3F4F8" }}
          />
        </TouchableOpacity>
      </View>
      <View className="w-full mt-4">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="py-1 px-2.5 rounded-2xl border"
              style={styles.tab(activeJobType, item)}
              onPress={handlePress(item)}
            >
              <Text
                className="font-medium"
                style={styles.tabText(activeJobType, item)}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
