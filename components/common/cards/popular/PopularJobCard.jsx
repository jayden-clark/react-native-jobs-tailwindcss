import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      className={`w-64 p-6 ${
        selectedJob === item.job_id ? "bg-indigo-900" : "bg-white"
      } rounded-xl space-y-4`}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        className={`w-12 h-12 ${
          selectedJob === item.job_id ? "bg-white" : "bg-gray-200"
        } rounded-lg flex justify-center items-center`}
      >
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="h-3/4 w-3/4"
        />
      </TouchableOpacity>
      <Text
        className="text-base font-regular text-gray-400 mt-2"
        numberOfLines={1}
      >
        {item.employer_name}
      </Text>
      <View className="mt-5">
        <Text
          className={`text-lg ${
            selectedJob === item.job_id ? "text-gray-100" : "text-indigo-900"
          } font-medium`}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text className="text-base font-sans text-purple-300">
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
