import axios from "axios";

import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const { data } = route.params;
  const { usr, pwd } = data;
  let userInfo = {
    usr,
    pwd,
  };

  console.log(data);
  // console.log(data[0]);
  // let name = data[0].NAME;
  let Email = data.message.email;
  let Token = data.message.access_token;
  console.log(data);

  // let EnterpriseId = data[1].EnterpriseId;
  // let MobileNo = data[0].MobileNo;
  // let address = data[0].Address;

  // let PeriodFrom = data[0].PeriodFrom;
  // let PeriodTo = data[0].PeriodTo;
  // let CustomerImage = data[0].CustomerImage;
  // let TenantId = data[0].TenantId;
  // let TenantName = data[0].TenantName;
  // let taxid = data[0].TCS2061CApplicableSalesTaxId;

  //taxonomy

  const onPressFunction = () => {
    navigation.navigate("Monglix", { data: data });
  };

  useEffect(() => {
    let config = {
      method: "get",
      // mode: 'no-cors',
      // credentials: 'include',
      url: "http://work.8848digitalerp.com/api/resource/Client/",
      data: userInfo,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Authorization": `Bearer ${Token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
      // type:"noauth"
      // withCredentials: true,
      // credentials: 'same-origin',
    };

    return axios(config)
      .then(function (response) {
        console.log(response.data);

        // navigation.navigate("", { data: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={styles.centeredView}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Name : hcioShc</Text>
                <Text style={styles.modalText}>EnterpriseId : helllo</Text>
                <Text style={styles.modalText}>MobileNo : 7021082823</Text>
                <Text style={styles.modalText}>Email : test@gmail.com</Text>
                <Text style={styles.modalText}>Address : mumbai</Text>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
        <View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible1}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible1(!modalVisible1);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>TaxID : 123</Text>
                  <Text style={styles.modalText}>PeriodFrom : jan</Text>
                  <Text style={styles.modalText}>PeriodTo : Joe</Text>
                  <Text style={styles.modalText}>CustomerImage : img</Text>
                  <Text style={styles.modalText}>TenantId : 676</Text>
                  <Text style={styles.modalText}>TenantName : test</Text>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible1(!modalVisible1)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible1(true)}
            >
              <Text style={styles.textStyle}>Show Tax</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Pressable onPress={onPressFunction}>
            <Text>I'm pressable!</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProfileScreen;
