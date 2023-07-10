import React from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      className={`py-4 px-5 ${
        name === activeTab ? "bg-indigo-900" : "bg-gray-200"
      } rounded-2xl ml-0.5 shadow-sm`}
      onPress={onHandleSearchType}
    >
      <Text
        className={`text-base font-medium ${
          name === activeTab ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View className="mt-3 mb-1.5">
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: 6 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
