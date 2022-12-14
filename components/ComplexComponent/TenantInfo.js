import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { COLOR } from "../../constants";
import Background from "../Background";
import { ROLES } from "../../constants";

const TenantInfo = (props) => {
  const { name, phone, role } = props;
  return (
    <Background style={styles.container}>
      <Text style={{ color: {role} == ROLES.admin? COLOR.user.primaryShade[200] : COLOR.admin.primaryShade[200]}}>{name}</Text>
      <Text>{phone}</Text>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.common.lightGrey,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default TenantInfo;
