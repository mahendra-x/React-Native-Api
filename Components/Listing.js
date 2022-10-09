import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";



const Listing = ({ navigation, route }) => {
  const [listingData, setListingData] = useState([]);
  // const { data } = route.params;

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "token 86ecc77628c9544:bb3daa49eab307e");
    myHeaders.append(
      "Cookie",
      "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://work.8848digitalerp.com/api/resource/Client/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setListingData(result.data), console.log(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);


  const handlelogout = ()=> {
    alert("User is successfully logged out");
    navigation.navigate("Home")
  }

  return (
    <>
      <View style={styles.container}>
        {listingData.map((item, i) => {
          return (
            <Text key={i} style={styles.item}>
              <TouchableOpacity 
                onPress={() =>
                  navigation.navigate("Form", { personName: item.name })
                }
              >
                {item.name}
              </TouchableOpacity>
            </Text>
          );
        })}

        <GradientButton
          style={{ marginVertical: 8 }}
          text="LOGOUT"
          textStyle={{ fontSize: 17 }}
          gradientBegin="#fa6f1b"
          gradientEnd="#f6b193"
          gradientDirection="diagonal"
          height={50}
          width={"90%"}
          radius={15}
          impact
          impactStyle="Light"
          onPressAction={() => handlelogout()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
    justifyContent:"space-between",
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default Listing;
