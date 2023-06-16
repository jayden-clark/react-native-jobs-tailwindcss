import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tab: (activeJobType, item) => ({
    borderColor: activeJobType === item ? "#444262" : "#C1C0C8",
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? "#444262" : "#C1C0C8",
  }),
});

export default styles;
