import React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { COLOR } from "../../constants";
import Background from "../Background";

const PaymentOption = (props) => {
  const { type } = props;
  const typeToLogo = () => {
    switch (type) {
      case "momo":
        return <Text>Momo</Text>;
      case "zaloPay":
        return <Text>Zalo Pay</Text>;
      case "viettelPay":
        return <Text>Viettel Pay</Text>;
      default:
        break;
    }
  };
  const typeToText = () => {
    switch (type) {
      case "momo":
        return <Text style={{ fontSize: 10 }}>Momo</Text>;
      case "zaloPay":
        return <Text style={{ fontSize: 10 }}>Zalo Pay</Text>;
      case "viettelPay":
        return <Text style={{ fontSize: 10 }}>Viettel Pay</Text>;
      default:
        break;
    }
  };
  return (
    <Background style={styles.container}>
      <View style={styles.logo}>{typeToLogo()}</View>
      <View style={styles.text}>
        {typeToText()}
        <Text style={{ fontSize: 10 }}>E-wallet</Text>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 125,
    height: 42
  },
  logo: {
    backgroundColor: COLOR.common.grey,
    width: 30,
    height: 30
  },
  text: {
    textAlign: "center",
  }
});
export default PaymentOption;
