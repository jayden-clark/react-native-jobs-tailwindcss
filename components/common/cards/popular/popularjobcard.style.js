import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: 24,
    backgroundColor: selectedJob === item.job_id ? "#312651" : "#FFF",
    borderRadius: 16,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
    shadowColor: "#F3F4F8",
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : "#F3F4F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: 16,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: 7.5,
  },
  infoContainer: {
    marginTop: 20,
  },
  jobName: (selectedJob, item) => ({
    fontSize: 20,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? "#F3F4F8" : "#312651",
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: 14,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? "#F3F4F8" : "#312651",
  }),
  location: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
