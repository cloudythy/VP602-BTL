import React, { useCallback, useState } from "react";
import { TextInput, Text, StyleSheet, View, Switch } from "react-native";
import { COLOR } from "../../constants";

const PriceRange = (props) => {
  const { placeholderFromValue, placeholderToValue } = props;
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholderFromValue}
        style={styles.input}
        value={fromValue}
        onChangeText={(value) => {
          if (typeof value === "number") {
            setFromValue(value);
          }
        }}
      ></TextInput>
      <Text style={{ justifyContent: "center" }}> - </Text>
      <TextInput
        placeholder={placeholderToValue}
        style={styles.input}
        value={toValue}
        onChangeText={(value) => {
          if (typeof value === "number") {
            setToValue(value);
          }
        }}
      ></TextInput>
    </View>
  );
};
export default PriceRange;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  input: {
    padding: 5,
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
    borderRadius: 20,
    backgroundColor: COLOR.common.lightGrey,
    placeholderTextColor: COLOR.common.darkGrey
  }
});
