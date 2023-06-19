import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-medium text-base text-purple-900">
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text className="font-medium text-base text-indigo-700">
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" colors="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={(item) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
