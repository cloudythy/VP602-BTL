import React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { COLOR } from "../../../constants";
import Background from "../../Background";
import RoomInfo from "../../ComplexComponent/Room/RoomInfo";
import RecheckPaymentDialog from "./RecheckPaymentDialog";
import TenantInfo from "../../ComplexComponent/TenantInfo";
const RegistrationPayment = (props) => {
  const { tenantInfo, roomInfo, onOk, onCancel, totalBill } = props;
  const { roomName, price, address, deposit, numOfPeople } = roomInfo;
  const { tenantName, phone, role } = tenantInfo;
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
      <Text style={{ marginTop: 5 }}>Tenants (maximum {numOfPeople})</Text>
      <TenantInfo name={tenantName} phone={phone} role={role}/>
    </RecheckPaymentDialog>
  );
};
const styles = StyleSheet.create({});
export default RegistrationPayment;
