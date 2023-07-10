import React from "react";
import { View, Text, Image } from "react-native";

import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View className="my-4 flex justify-center items-center">
      <View className="w-20 h-20 p-4 flex justify-center items-center bg-white rounded-lg">
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          className="w-4/5 h-4/5"
        />
      </View>

      <View className="mt-3">
        <Text className="text-2xl text-center font-bold text-purple-900">
          {jobTitle}
        </Text>
      </View>

      <View className="mt-1.5 flex flex-row justify-center items-center">
        <Text className="text-base text-purple-900 font-medium">
          {companyName} /{" "}
        </Text>
        <View className="flex flex-row justify-center items-center">
          <Image
            source={icons.location}
            resizeMode="contain"
            className="w-3.5 h-3.5"
            style={{ tintColor: "#83829A" }}
          />
          <Text className="text-base text-gray-600 font-sans ml-0.52">
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
