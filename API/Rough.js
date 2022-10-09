import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import GradientButton from "react-native-gradient-buttons";
import { Dropdown } from "../DropDown";
import DropdownComponent from "../DropdownComponent";

const aaraay = [
  { label: "Football", value: "football" },
  { label: "Baseball", value: "baseball" },
  { label: "Cricket", value: "cricket" },
];

const representCompany = [
  { label: "8848 Digital LLP", value: "8848 Digital LLP" },
  { label: "Wayne Enterprises", value: "Wayne Enterprises" },
  { label: "Showbiz Pizza Place", value: "Showbiz Pizza Place" },
  { label: "Pro Garden Management", value: "Pro Garden Management" },
  { label: "The Lawn Guru", value: "The Lawn Guru" },
];

const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const bank = [
  { label: "Goldman Sachs", value: "Goldman Sachs" },
  { label: "Citigroup Inc", value: "Citigroup Inc" },
  { label: "Wells Fargo", value: "Wells Fargo" },
  { label: "Bank of America", value: "Bank of America" },
  { label: "HDFC", value: "HDFC" },
];

const CUSTOMERTYPE = [
  { label: "Company", value: "Company" },
  { label: "Individual", value: "Individual" },
];

const Territory = [
  { label: "East", value: "East" },
  { label: "West", value: "West" },
  { label: "North", value: "North" },
  { label: "South", value: "South" },
];
const Form = () => {
  const [fetchData, setFetchData] = useState([]);
  const [name, setName] = useState("Mahendra");

  const [formData, setFormdata] = useState({
    customer_name: "",
    email: "",
    address: "",
    mobileno: "",
    represents_company: "",
    gender: "",
    bank: "",
    type: "",
    territory: "",
  });

  const onChange = (e, name, value) => {
    // console.log(e, name, value);

    switch (name) {
      case "Select Company":
        setFormdata({ ...formData, represents_company: e.value });
        break;
      case "Select Gender":
        setFormdata({ ...formData, gender: e.value });
        break;
      case "Select bank":
        setFormdata({ ...formData, bank: e.value });
        break;
      case "Select customer_type":
        setFormdata({ ...formData, type: e.value });
        break;
      case "Select territory":
        setFormdata({ ...formData, territory: e.value });
        break;
    }

    // setUser({ ...user, [e.target.name]: e.target.value })
  };

  const puthandler = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      gender: "Male",
    });

    var config = {
      method: "get",
      url: "http://work.8848digitalerp.com/api/resource/Client/Bruce Wayne-02",
      headers: {
        Authorization: "token 86ecc77628c9544:bb3daa49eab307e",
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie:
          "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=",
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        // console.log("response from server=>",JSON.stringify(response.data));
        setFetchData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log(formData['mobileno'])

  useEffect(() => {
    puthandler();
    // console.log(fetchData)
    // setFormdata({...formData,customer_name: fetchData.name})
    // console.log(fetchData.name)
  }, []);
  // setFormdata({...formData,customer_name: fetchData.name})

  // console.log(fetchData);

  const arr = Object.entries(fetchData);

  // console.log(JSON.stringify(arr))

  // arr.map((item,i)=> {
  //   console.log(item)
  // })

  // fetchData.map((item,i)=> console.log(item))

  // const access = Object.keys(fetchData).forEach(function(key, index) {
  //   // return fetchData[key];
  //   return (
  //     <Text>
  //       fetchData[key]

  //     </Text>
  //   )

  // });

  // let loopData = "";
  // for (var x in fetchData) {
  //   console.log(fetchData[x]);

  //   console.log(fetchData[x].name == name);

  //   if (x === "name") {
  //     console.log(fetchData[x].name);
  //     // return loopData += `<Text>My name is ${fetchData[x]}</Text>`
  //   }
  //   console.log(loopData);
  // }

  var loopData = "";
  for (let [key, value] of Object.entries(fetchData)) {
    console.log(key)
    if (key === "name") {
      console.log(key,value)
    }
  }

  // console.log(access)
  console.log("fetchedData=>",fetchData?.data?.address);

  const handleChange = (e) => {
    console.log(e);
    // console.log({...formData, [e.target.name]: e.target.value})

    setFormdata({ ...formData, customer_name: e });
  };

  console.log("isArray", Array.isArray(fetchData));

  console.log(fetchData); //useState
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <DropdownComponent
              items={representCompany}
              labelName="Select Company"
              formHandler={onChange}
            />

            <TextInput
              style={styles.textLogin}
              placeholder="customer_name"
              name="customer_name"
              value={formData.customer_name}
              onChangeText={handleChange}
              editable={true}
            />
            <TextInput
              style={styles.textLogin}
              placeholder="email"
              onChange={(e) => setFormdata({ fetchData: e })}
              name="email"
              value={formData.email}
            />
            <DropdownComponent
              items={gender}
              labelName="Select Gender"
              formHandler={onChange}
            />

            <TextInput
              style={styles.textLogin}
              placeholder="Address"
              onChangeText={(e) => setFormdata({ ...formData, address: e })}
              name="address"
              value={formData.address}
            />
            <TextInput
              style={styles.textLogin}
              placeholder="Mobile no"
              onChangeText={(e) => setFormdata({ ...formData, mobileno: e })}
              keyboardType="number"
              name="mobile"
              value={formData.mobileno}
            />

            <DropdownComponent
              items={bank}
              labelName="Select bank"
              formHandler={onChange}
            />

            <DropdownComponent
              items={CUSTOMERTYPE}
              labelName="Select customer_type"
              formHandler={onChange}
            />

            <DropdownComponent
              items={Territory}
              labelName="Select territory"
              formHandler={onChange}
            />

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
              onPressAction={() => console.log("pressed")}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginHorizontal: 21,
  },
  head: {
    fontSize: 25,
    marginBottom: 21,
    fontWeight: "500",
  },
  textLogin: {
    height: 40,
    // width: "90%",
    borderRadius: 5,
    // textAlign: "center",
    fontSize: 19,
    borderColor: "silver",
    borderWidth: 1,
    marginTop: 16,
    paddingLeft: 20,
    backgroundColor: "#fff",
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

export default Form;
