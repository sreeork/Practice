import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldt}>MUCKTY</Text>
      </View>
      <Button title="New User" onPress={() => navigation.navigate("Sign Up")} />
    </View>
  );
}
function SignUp({ submitHandler }) {
  const [name, sname] = useState("");
  const [phone, sphone] = useState("");
  const [email, semail] = useState("");
  const [password, spassword] = useState("");
  const [user, suser] = useState([
    {
      name: "sree",
      phone: "9689977",
      email: "sreeork",
      password: "1234",
      key: "1",
    },
  ]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.boldt}>MUCKTY</Text>
        </View>
        <Text>Let's do together!</Text>
        <View style={{ padding: 10, backgroundColor: "#f0f8ff", margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Your Name"
            onChangeText={(val) => sname(val)}
          />
        </View>
        <View style={{ padding: 10, backgroundColor: "#f0f8ff", margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            keyboardType="numeric"
            placeholder="Your Phone No."
            onChangeText={(val) => sphone(val)}
          />
        </View>
        <View style={{ padding: 10, backgroundColor: "#f0f8ff", margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Your Email"
            onChangeText={(val) => semail(val)}
          />
        </View>
        <View style={{ padding: 10, backgroundColor: "#f0f8ff", margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Your Password"
            onChangeText={(val) => spassword(val)}
          />
        </View>
        <Button
          onPress={() => submitHandler(name, phone, email, password)}
          title="Sign Up"
        />
        <View style={styles.list}>
          <FlatList
            data={user}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const pressHandler = (key) => {
  suser((prevuser) => {
    return prevuser.filter((user) => user.key != key);
  });
};

const Stack = createStackNavigator();
const submitHandler = (name, phone, email, password) => {
  suser((prevuser) => {
    return [
      {
        name: name,
        phone: phone,
        email: email,
        password: password,
        key: Math.random().toString(),
      },
      ...prevuser,
    ];
  });
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldt: {
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
});

export default App;
