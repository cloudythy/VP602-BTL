import { TextInput, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { COLOR } from "../../constants";
import CustomButton from "../Button/CustomButton";
// import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  const { user } = props;
  const pressHandler = () => {};
  return (
    <View style={styles.container}>
      {/* Cho nay bo icon search the vo nhe */}
      <Text style={styles.icon}>I</Text>
      <TextInput style={styles.input} placeholder="Search" />
      {/* Cai nay co icon filter nua */}
      <CustomButton type={user} style={styles.button} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLOR.common.darkGrey,
    textAlign: "center",
    lineHeight: 40
  },
  input: {
    flex: 1,
    padding: 12,
    marginLeft: 5,
    marginRight: 5,
    // width: 100,
    borderRadius: 8,
    backgroundColor: COLOR.common.lightGrey,
    placeholderTextColor: COLOR.common.darkGrey
  },
  button: {
    width: 40,
    height: 40
  }
});
export default Search;
