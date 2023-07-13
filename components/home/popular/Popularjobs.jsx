import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import { data } from "./PopularData";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
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
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
