import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ];

const DropdownComponent = ({
  items,
  labelName,
  formHandler,
  ApiSelectedValue,
}) => {
  const [value, setValue] = useState(ApiSelectedValue);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState(labelName);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {labelName}
        </Text>
      );
    }
    return null;
  };

  useEffect(() => {
    setValue(ApiSelectedValue);
  });

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={items}
        search
        maxHeight={300}
        labelField="value"
        valueField="label"
        placeholder={!isFocus ? `${labelName}` : "..."}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.label);
          setIsFocus(false);
          formHandler(item, labelName, value);
        }}
        search={false}
        // dropdownPosition="auto"
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    paddingTop: 16,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "white",
    marginL: 0,

    // paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    // paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 16,
    backgroundColor: "white",
  },
});
