import React from "react";
import { TouchableOpacity, Image } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const btnImgClasses = `w-${dimension} h-${dimension} rounded-[9.6px]`;
  return (
    <TouchableOpacity
      className="w-10 h-10 bg-white-200 rounded-lg flex justify-center items-center"
      onPress={handlePress}
    >
      <Image source={iconUrl} resizeMode="cover" className={btnImgClasses} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
