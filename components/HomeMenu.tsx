import { globalStyles } from "@/global/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomCard from "./common/CustomCard";

const HomeMenu = () => {
  return (
    <LinearGradient
      colors={["#FFF3D6", "#FEECC9", "#EED9B7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={globalStyles.container}
    >
      <View style={[globalStyles.abd, { marginBottom: 20 }]}>
        <Text style={globalStyles.title}>Welcome to TelanGo!</Text>
        <View>
          <Pressable
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => {}}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>History</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => {
              console.log("pressed");
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Culture</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CustomCard
            title={"History"}
            imagePath="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></CustomCard>
          <CustomCard
            title={"Culture"}
            imagePath="https://images.unsplash.com/photo-1773332611574-d73d8f5cea36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></CustomCard>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
export default HomeMenu;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginBottom: 120,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
});
