import { ImageBackground, Pressable, StyleSheet } from "react-native";
import backImag from "../../assets/images/card/culture_600x600.png";
const CustomCard = ({ title, imagePath, onPress }) => {
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <ImageBackground
        source={backImag}
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
        }}
        resizeMode="cover"
      >
        {/* <Image
          source={{ uri: imagePath }}
          style={{ height: 50, width: 50 }}
        ></Image> */}
        {/* <View style={{ width: "auto" }}>
          <Button
            title={title}
            onPress={() => {
              console.log("Button in Card pressed");
            }}
          ></Button>
        </View> */}
      </ImageBackground>
    </Pressable>
  );
};
export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 150,
    backgroundColor: "#fff",
    // paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
});
