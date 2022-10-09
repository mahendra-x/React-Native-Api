import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Image,
} from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

import {
  VStack,
  Input,
  Button,
  IconButton,
  NativeBaseProvider,
  Center,
  Icon,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Font from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FoodData = [
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Deals Zone",
    time: "45 min",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Industrial",
    time: "30 min",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Electricals ",
    time: "60 min",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Office",
    time: "45 min",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Covid Essential",
    time: "45 min",
  },
];

const MonglixScreen = () => {
  const [images, setimages] = useState([
    // require("../assets/images/image1.jpg"),
    // require("../assets/images/image2.jpg"),
    // require("../assets/images/image3.jpg"),
    // require("../assets/images/image4.jpg"),
    // require("../assets/images/image5.jpg"),
  ]);
  function SearchBar() {
    return (
      <VStack
        my="0"
        space={5}
        w="100%"
        maxW="366px"
        divider={
          <Box px="1">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} marginBottom={3}>
          <Input
            placeholder="Search People & Places"
            width="320px"
            height="50px"
            borderRadius="4"
            py="0"
            px="2"
            fontSize="12"
            backgroundColor="#fff"
            borderColor="black"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="black.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={
              <Icon
                m="2"
                mr="3"
                size="6"
                color="blue.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
  }

  function Example() {
    return (
      <Center flex={1} px="2">
        <SearchBar />
      </Center>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.logo}>
          <Text style={styles.mongo}>moglix</Text>
        </View>
        <View>
          <Icons name="cart" size={25} color="black" />
        </View>
      </View>
      <View style={styles.searchView}>
        <NativeBaseProvider>
          <Center flex={1} px="0">
            <Example />
          </Center>
        </NativeBaseProvider>
        {/* <View style={{height:1,backgroundColor: 'black'}}></View> */}
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FoodData}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ marginTop: 15,backgroundColor: "#fff"}}
          renderItem={({ item }) => (
            <View style={{ marginLeft: 0, backgroundColor: "#fff" }}>
              <Image
                style={{
                  width: 70,
                  height: 60,
                  marginLeft: 15,
                }}
                source={{
                  uri: item.img,
                }}
              ></Image>
              <View>
                <Text style={{ margin: 15, fontSize: 12, textAlign: "center" }}>
                  {item.name}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
    backgroundColor: "#fff",
  },
  logo: {
    color: "#900",
  },
  mongo: {
    color: "#900",
    fontWeight: "bold",
  },
  searchView: {
    width: "100%",
    marginBottom: "1rem",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#fff",
  },
});

export default MonglixScreen;
