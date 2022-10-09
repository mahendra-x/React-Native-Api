import React from "react";
import NetInfo from "@react-native-community/netinfo";

const NetworkCheck = () => {

  let config = {
    method: "post",
    origin: "*",
    url: "http://work.8848digitalerp.com/api/method/work.api.login.get_access_api_token?usr=test@gmail.com&pwd=Ascra@123",
    // headers:{
    // 'Access-Control-Allow-Origin': 'http://localhost:19006',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization,X-Requested-With',
    // 'Content-Type': 'application/json',
    // 'Accept': "/",

    // },

    // data: data,
  };
  console.log(qs.parse(data));
  let userInfo = qs.parse(data);

  // return axios(config)
  //   .then(function (response) {
  //     console.log(response.data);
  //     // const responseData = response.data;
  //       let data1 = response.data;
  //       let data2 = userInfo;
  //       let data = {...data1, ...data2};
  //     // setResponseStore(data); //add
  //     //   console.log(responseStore);
  //     navigation.navigate("Profile", { data: data });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  fetch(
    "http://work.8848digitalerp.com/api/method/work.api.login.get_access_api_token?usr=test@gmail.com&pwd=Ascra@123",
    {
      method: "POST", // or 'PUT'
      // mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    }
  )
    .then((response) => console.log(response.json()))
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
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
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return <div>NetworkCheck</div>;
};

export default NetworkCheck;
