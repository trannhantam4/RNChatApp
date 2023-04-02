import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const catImg =
  "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403";
const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          size={24}
          color={"#c4c4c4"}
          style={{ marginLeft: 15 }}
          name="search"
        />
      ),
      headerRight: () => (
        <Image
          style={{ width: 40, height: 40, marginRight: 15 }}
          source={{ uri: catImg }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("Chat")}
      >
        <Entypo name="chat" size={24} color={"#c4c4c4"} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 20,
  },
  backImg: {
    width: "100%",
    height: 340,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  whiteSheet: {
    height: "75%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  chatButton: {
    backgroundColor: "#f57c00",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#f57c00",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
export default Home;
