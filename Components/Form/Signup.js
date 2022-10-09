import React, { useState } from "react";
import { Button, Card, Form, Item, Toast } from "native-base";
import { useToast } from "native-base";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  CheckBox,
  ToastAndroid,
} from "react-native";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/ionicons";
import InputBox from "./InputBox";

const SignUp = ({ navigation }) => {
  const [fnameerr, setFnameerr] = useState("First Name is required");
  const [lnameerr, setLnameerr] = useState("Last Name is required");
  const [emailerr, setEmailerr] = useState("Email is required");
  const [passerr, setPasserr] = useState("Password is required");
  const [cpasserr, setcpasserr] = useState("Confirm Password is required");
  const [phoneerr, setphoneerr] = useState("Phone Number is required");
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [form, setform] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cpass: "",
    refcode: "",
  });

  const toast = useToast();

  console.log(email);
  console.log(password);
  console.log(emailerr);
  function showToast() {
    Toast.show("All Your Base Are Belong To Us");
    // ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  }

  const Validate = (e, msg) => {
    console.log(e, msg);
    const regexname = new RegExp(/^[a-zA-Z ]+$/);
    const regexEmail = new RegExp(
      /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
    );
    const regexPhone = new RegExp(
      /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    );
    switch (msg) {
      case "fname":
        if (e.length === 0) {
          setFnameerr("First Name is required");
        } else if (!regexname.test(e)) {
          setFnameerr("Invalid first name");
        } else {
          setFnameerr("");
        }
        break;
      case "lname":
        if (e.length === 0) {
          setLnameerr("Last name is required ");
        } else if (!regexname.test(e)) {
          setLnameerr("Invalid last name");
        } else {
          setLnameerr("");
        }
        break;

      case "email":
        if (e.length === 0) {
          setEmailerr("Email is required");
        } else if (!regexEmail.test(e)) {
          setEmailerr("Invalid email");
        } else {
          setEmailerr("");
        }
        break;
      case "pass":
        if (e.length === 0) {
          setPasserr("Password is required ");
        } else if (e.length <= 5) {
          setPasserr("'Password is too small");
        } else {
          setPasserr("");
        }
        break;

      case "cpass":
        if (e.length === 0) {
          setcpasserr("Confirm password is required");
        } else if (e !== form.pass) {
          setcpasserr("Confirm Password is not matching ");
        } else {
          setcpasserr("");
        }
        break;
      case "refcode":
        if (e.length === 0) {
          setReferral("Please Enter Refferal Code");
        } else if (!regexname.test(e)) {
          setReferral("Invalid Refferal Code");
        } else {
          setReferral("");
        }
        break;
    }
  };

  const Onsubmit = () => {
    if ( emailerr === '' && passerr === '' && referral === '' && cpasserr === '') {
      navigation.navigate("login")
    }
    if (emailerr !== "") {
      Alert.alert("emailerr=>", emailerr);
      console.log(emailerr);
      Toast.show({
        text: emailerr,
        buttonText: "Okay",
        duration: 3000,

        style: { margin: 20 },
      });
    } else if (passerr !== "") {
      console.log(passerr);
      Toast.show({
        text: passerr,
        buttonText: "Okay",
        duration: 3000,

        style: { margin: 20 },
      });
    } else if (cpasserr !== "") {
      console.log(cpasserr);
      Toast.show({
        text: cpasserr,
        buttonText: "Okay",
        duration: 3000,

        style: { margin: 20 },
      });
    } else if (referral !== "") {
      console.log(referral);
      Toast.show({
        text: referral,
        buttonText: "Okay",
        duration: 3000,

        style: { margin: 20 },
      });
    } else {
      Toast.show({
        text: "Please fill All fields",
        buttonText: "Okay",
        duration: 3000,

        style: { margin: 20 },
      });
    }
  };

  console.log(form);

  return (
    <View style={styles.container}>
      <View style={styles.round}>
        <Icon
          name="chevron-back-circle-outline"
          size={30}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={styles.img}
          source={require("../assets/others/logo.png")}
        />
      </View>
      <View style={styles.square}>
        <Text style={styles.txt1}>Welcome!</Text>

        <Text style={styles.txt6}>sign in to continue</Text>

        {/* <View style={styles.email}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
        source={require("../assets/others/email_icon.png")}
      />
      <TextInput style={styles.input} placeholder="E-Mail ID" />
    </View> */}
        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/email_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Email-Id"
            onChangeText={(e) => {
              Validate(e, "email"), setform({ ...form, email: e });
            }}
          />
        </View>
        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/key_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Password"
            secureTextEntry="true"
            onChangeText={(e) => {
              Validate(e, "pass"), setform({ ...form, pass: e });
            }}
          />
        </View>
        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/key_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Confirm Password"
            secureTextEntry="true"
            onChangeText={(e) => {
              Validate(e, "cpass"), setform({ ...form, cpass: e });
            }}
          />
        </View>
        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/person_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Refferal code"
            onChangeText={(e) => {
              Validate(e, "refcode"), setform({ ...form, refcode: e });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            paddingTop: 25,
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.txt7}>
            I Agree to Flitpay's <a href="/">Terms of Service</a>
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity style={styles.btn} onPress={() => Onsubmit()}>
            <Text style={styles.txt5}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Text style={styles.txt4}>
            Already have an account? <Text onPress={()=>navigation.navigate("login")}>Sign in</Text>
          </Text>
          <Text style={styles.txt8}>FAQ's | SUPPORT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    fontWeight: "bold",
  },

  icon: {
    color: "white",
    marginLeft: "15px",
    marginTop: "7px",
    padding: 5,
    backgroundColor: "#a7adfd",
    width: 40,
    borderRadius: 5,
  },

  icon1: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon2: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon3: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon4: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginBottom: "21px",
    marginRight: "10px",
  },

  img: {
    display: "flex",
    alignSelf: "center",
    width: "24vh",
    height: "7vh",
  },

  email: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
    alignItems: "flex-end",
  },

  password: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  confirm: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  referral: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  txt1: {
    fontWeight: "bold",
    marginTop: "20px",
    marginLeft: "20px",
  },

  txt6: {
    marginLeft: "20px",
    marginBottom: 20,
  },

  round: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#5b46f7",
  },
  square: {
    display: "flex",
    backgroundColor: "#fff",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    zIndex: 1,
    height: "90%",
    width: "100%",
    position: "absolute",
    top: 100,
  },

  input: {
    marginTop: "20px",
    borderBottomWidth: 1,
    // textAlign: 'center',
    width: "80%",
    height: "100%",
    padding: 5,
    fontWeight: 600,
    borderBottomColor: "#9a999d",
    color: "black",
  },

  input1: {
    marginTop: "23px",
    borderBottomWidth: 1,
  },

  input2: {
    marginTop: "23px",
    borderBottomWidth: 1,
  },

  input3: {
    marginTop: "23px",
    marginBottom: "23px",
    borderBottomWidth: 1,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    color: "white",
    width: "90%",
    marginTop: 10,
    marginLeft: "18px",
    marginBottom: "20px",
    borderRadius: "4px",
    backgroundColor: "#5b46f7",
  },

  txt2: {
    marginLeft: "49px",
    marginTop: "5px",
    marginBottom: "20px",
  },

  txt3: {
    marginTop: "45px",
    marginBottom: "45px",
  },

  txt4: {
    marginBottom: "16px",
    marginLeft: "20px",
    justifyContent: "center",
    alignItems: "center",
  },

  txt5: {
    color: "white",
  },

  txt7: {
    marginLeft: "10px",
  },

  txt8: {
    // marginLeft: "70px",
  },
});

export default SignUp;
