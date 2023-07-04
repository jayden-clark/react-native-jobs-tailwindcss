import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View className="mt-8">
      <View className="mt-3 flex-row justify-between">
        <Text className="text-3xl font-medium text-gray-500">Nearby jobs</Text>
        <TouchableOpacity>
          <Text className="text-base font-medium text-gray-500">Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 12 }} className="mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
