import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      className="flex-1 flex-row justify-between items-center p-4 bg-white shadow-lg rounded-2xl"
      onPress={handleNavigate}
    >
      <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-xl justify-center items-center">
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-3/4 h-3/4"
        />
      </TouchableOpacity>

      <View className="flex-1 mx-4">
        <Text className="text-base font-bold text-indigo-900" numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text className="text-sm font-sans text-gray-500 mt-1 capitalize">
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
