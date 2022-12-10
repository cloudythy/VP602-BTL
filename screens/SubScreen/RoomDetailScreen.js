// import {Text, View, StyleSheet} from 'react-native';
// export default function RoomDetailScreen(){
//     return (
//         <View>
//             <View style={styles.container}>
//                 <Image source={require('../images/Room/RoomDetail.png')} style={styles.image} scale = 'scale'/>
//                     <View style={styles.normal.info}>
//                     <Text style={styles.normal.title}>New Tower</Text>
//                     <View style={styles.wrapper}>
//                         <Text style={{ color: COLOR.common.darkGrey }}>
//                             <Text style={styles.normal.price}>4.000.000/month</Text>{' '}
//                             VND/month
//                         </Text>
//                         <Text style={styles.normal.address}>Hocmon</Text>
//                     </View>
//                     <View style={styles.wrapper}>
//                         <Text style={styles.normal.text}>
//                             (+) {numOfRooms}{' '}
//                             {numOfRooms > 1 ? 'bedrooms' : 'bedroom'}
//                         </Text>
//                         <Text style={styles.normal.text}>
//                             (+) {numOfPeople}{' '}
//                             {numOfPeople > 1 ? 'persons' : 'person'}
//                         </Text>
//                         <Text style={styles.normal.text}>
//                             (+) Deposit: {deposit} VND
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     image: {
//         width: '70%',
//         height: '70%',
//     },
// })