/**
 * Mover o App.js para src
 * Necesseario adicionar o caminho do entryPoint no app.json dentro de "expo":
 * "entryPoint": "./src/App.js"
 * importar e exportar o registerRootComponent
 */

import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from "react-native";
import { registerRootComponent } from "expo";

const appColor = {
  darkAppBlueColor: "#0d1117",
  greyAppColor: "#484f58",
  whiteAppColor: "#c9d1d9",
  darkGreenColor: "#006d32",
  lighGreenColor: "#39d353",
};

const imageProfileGithub =
  "https://avatars.githubusercontent.com/u/67872931?v=4";

const urlToMyGithub = "https://github.com/rafaeldnribeiro";

const handlePressGoToGithub = async () => {
  console.log("Verificando link");
  const res = await Linking.canOpenURL(urlToMyGithub);

  if (res) {
    console.log("Link aprovado");
    console.log("Abrindo link");
    await Linking.openURL(urlToMyGithub);
  }
};

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={appColor.darkBlue} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de Rafael com fundo de arvores"
          style={style.avatar}
          source={{
            uri: imageProfileGithub,
          }}
        />
        <Text accessibilityLabel="Rafael Ribeiro" style={[style.name]}>
          Rafael Ribeiro
        </Text>
        <Text accessibilityLabel="rafaeldnribeiro" style={[style.userName]}>
          rafaeldnribeiro
        </Text>
        <Text
          accessibilityLabel="Estudante Web/Mobile Developer"
          style={[style.description]}
        >
          Estudante Web/Mobile Developer
        </Text>
        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
        </View>

        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
        </View>

        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View
            style={style.square}
            backgroundColor={appColor.lighGreenColor}
          ></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.flexrow_container}>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  container: {
    marginTop: 0,
    backgroundColor: appColor.darkAppBlueColor,
    flex: 1, // Exparde a cor para tela inteira
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    marginTop: 0,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: appColor.whiteAppColor,
    borderWidth: 1,
  },
  name: {
    marginTop: 20,
    fontSize: 25,
    color: appColor.whiteAppColor,
    fontWeight: "bold",
  },
  userName: {
    marginTop: -3,
    fontSize: 15,
    color: appColor.greyAppColor,
    fontWeight: "normal",
  },
  description: {
    marginTop: -10,
    fontSize: 15,
    justifyContent: "center",
    color: appColor.whiteAppColor,
    fontWeight: "normal",
    padding: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: appColor.greyAppColor,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    color: appColor.whiteAppColor,
    fontWeight: "bold",
  },
  flexrow_container: {
    flexDirection: "row",
    backgroundColor: appColor.darkAppBlueColor,
    justifyContent: "center",
  },
  square: {
    backgroundColor: appColor.darkGreenColor,
    height: 15,
    width: 15,
    margin: 2,
    borderRadius: 3,
  },
});

export default registerRootComponent(App);
