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
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View className="w-full">
        <Text className="font-DMRegular text-xl text-gray-700">
          Hello Jayden
        </Text>
        <Text className="font-DMBold text-2xl text-purple-900 mt-0.5">
          Find your perfect job
        </Text>
      </View>

      <View className="flex justify-center items-center flex-row mt-5 h-12">
        <View className="flex-1 bg-white mr-2.5 justify-center items-center rounded-3xl h-full"></View>
      </View>
    </View>
  );
};

export default Welcome;
