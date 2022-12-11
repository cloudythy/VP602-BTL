import React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { COLOR } from "../../../constants";
import Background from "../../Background";
import RoomInfo from "../../ComplexComponent/Room/RoomInfo";
import RecheckPaymentDialog from "./RecheckPaymentDialog";

const CancelRegistration = (props) => {
  const { roomInfo, onOk, onCancel, totalBill } = props;
  const { roomName, price, address, deposit, numOfPeople } = roomInfo;

  return (
    <RecheckPaymentDialog onOk={onOk} onCancel={onCancel} totalBill={totalBill}>
      <View style={styles.roomInfo}>
        <RoomInfo
          name={roomName}
          price={price}
          address={address}
          deposit={deposit}
        />
      </View>
    </RecheckPaymentDialog>
  );
};
const styles = StyleSheet.create({});
export default CancelRegistration;
