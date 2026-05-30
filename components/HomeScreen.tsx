import backgroundImage from "@/assets/images/homepageOne.png";
import { globalStyles } from "@/global/globalStyles";
import { router } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const HomeScreen = () => {
  const homeNavigator = () => {
    router.push("/(home)/home");
  };
  return (
    <View style={globalStyles.homePageContainer}>
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
        resizeMode="cover"
      >
        <Pressable
          style={({ pressed }) => [
            styles.buttonContainer,
            pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] },
          ]}
          onPress={() => homeNavigator()}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started →</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginBottom: 120,
  },

  button: {
    backgroundColor: "#8B4513", // earthy brown (heritage feel)
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 30,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // elevation (Android)
    elevation: 6,
    marginBottom: 150,
  },

  buttonText: {
    color: "#F5DEB3", // soft wheat color
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
