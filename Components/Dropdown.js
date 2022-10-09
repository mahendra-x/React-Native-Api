import { Fragment, useState } from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Dropdown = ({ items,labelName,setFormdata,formHandler }) => {
  console.log(formHandler)
  // const [arr, setLabel] = useState("");
  // console.log(JSON.parse(JSON.stringify(items)));
  // const { Array } = props

  // const aaraay = [
  //     { label: "Football", value: "football" },
  //     { label: "Baseball", value: "baseball" },
  //     { label: "Hockey", value: "hockey" },
  //   ]
  // const selection = arr[0].map((item, i) => {
  //   item.value;
  //   // <View key={item.value}>{item}</View>
  // });

  // const select = arr[0].map((item, i) => (
  //   <Fragment key={i}>{item.value}</Fragment>
  // ));

  // console.log(selection);

  const labelAndValue = (value)=>{
    const selectedValue = {
      value,
      labelName
    }
    formHandler(selectedValue)

    return selectedValue
    
   
    
  }


  // console.log(labelAndValue())
  return (
    <RNPickerSelect
      placeholder={{ label: labelName? `${labelName}` : "Please Select list", value: "" ,}}
      onValueChange={(value) => labelAndValue(value)}
      useNativeAndroidPickerStyle={false}
      items={items}
      
      
      
     
    />
  );
};

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
