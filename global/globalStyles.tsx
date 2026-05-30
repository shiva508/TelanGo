import { StyleSheet } from "react-native";

export const colors = {
  background: "#1a1a2e",
  header: "#242444",
  surface: "#2a2a4a",
  primary: "#4fc3f7",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignContent: "center",
    justifyContent: "center",
  },
  homePageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f15454",
    marginBottom: 150,
    textAlign: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    //backgroundColor: "#FFF3D6",
    backgroundColor: "#EED9B7",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  abd: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
