import axios from "axios";
let qs = require("qs");
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Pressable,
} from "react-native";
import APIPack from "../API/React_Assignment.postman_collection.json";
import GradientButton from "react-native-gradient-buttons";

// Just call reload method 


const Home = ({ navigation, route}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseStore, setResponseStore] = useState([]);
 



  let Authentication = () => {
    console.log("Authent", APIPack.item[0].request.url.query[1].value);
    let userId = APIPack.item[0].request.url.query[0].value;
    let pass = APIPack.item[0].request.url.query[1].value;

    if (email === userId && password === pass) {
      // alert('Welcome ' + email)
      let data = qs.stringify({
        usr: email,
        pwd: pass,
      });

      var myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image="
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://work.8848digitalerp.com/api/method/work.api.login.get_access_api_token?usr=test@gmail.com&pwd=Ascra@123",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (
           navigation.navigate("List",{result})
        ))
        .catch((error) => console.log("error", error));
    } else {
      alert("useremail or password is incorrect");
    }
  };
  console.log(email);

  const onPress = () => {
    alert("Press Enter");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login to continue</Text>
      <TextInput
        style={styles.textLogin}
        placeholder="User Id"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.textLogin}
        placeholder="Password"
        onChangeText={(e) => setPassword(e)}
      />
      {/* <View style={styles.btnView}>
        <Button
          style={styles.btn}
          title="Login"
          onPress={() => Authentication()}
        />
      </View> */}

      {/* <Pressable style={styles.button} onPress={() => }>
        <Text style={styles.text}>Login</Text>
      </Pressable> */}

      <GradientButton
        style={{ marginVertical: 8 }}
        text="LOGIN"
        textStyle={{ fontSize: 17 }}
        gradientBegin="#fa4f1b"
        gradientEnd="#f6b132"
        gradientDirection="diagonal"
        height={50}
        width={"90%"}
        radius={15}
        impact
        impactStyle="Light"
        onPressAction={() => Authentication()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    fontSize: 25,
    marginBottom: 21,
    fontWeight: "500",
  },
  textLogin: {
    height: 50,
    width: "90%",
    borderRadius: 5,
    // textAlign: "center",
    fontSize: 19,
    borderColor: "silver",
    borderWidth: 1,
    marginBottom: 14,
    paddingLeft: 20,
  },
  btn: {
    height: 50,
    width: "90%",
    // backgroundColor: "red",
    color: "#f194ff",
  },
  btnView: {
    width: "90%",
    backgroundColor: "silver",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#fd3925",
    // background: rgb(253,29,29),
    // background: linearGradient('90deg, rgba(253,29,29,1) 16%, rgba(253,57,37,1) 32%, rgba(252,176,69,1) 100%')

    width: "90%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Home;
