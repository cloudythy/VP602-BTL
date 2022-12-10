// import {Text, View, StyleSheet} from 'react-native';
// export default function RoomDetail(){
//     const { name, price, address, numOfRooms, numOfPeople, deposit, description } =
//         props;
//     return (
//         <View>
//             <View style={styles.container}>
//                 <Image source={require('..../images/Room/RoomDetail.png')} style={styles.image} scale = 'scale'/>
//                 <View style={styles.normal.info}>
//                 <Text style={styles.normal.title}>{name}</Text>
//                 <View style={styles.wrapper}>
//                     <Text style={{ color: COLOR.common.darkGrey }}>
//                         <Text style={styles.normal.price}>{price}</Text>{' '}
//                         VND/month
//                     </Text>
//                     <Text style={styles.normal.address}>{address}</Text>
//                 </View>
//                 <View style={styles.wrapper}>
//                     <Text style={styles.normal.text}>
//                         (+) {numOfRooms}{' '}
//                         {numOfRooms > 1 ? 'bedrooms' : 'bedroom'}
//                     </Text>
//                     <Text style={styles.normal.text}>
//                         (+) {numOfPeople}{' '}
//                         {numOfPeople > 1 ? 'persons' : 'person'}
//                     </Text>
//                     <Text style={styles.normal.text}>
//                         (+) Deposit: {deposit} VND
//                     </Text>
//                 </View>
//                 <Text style={styles.normal.price}>Description</Text>
//                 <Text>{description}</Text>
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
//     normal: {
//         image: {
//             height: 200,
//             backgroundColor: COLOR.common.grey,
//         },
//         text: {
//             color: COLOR.common.darkGrey,
//             paddingRight: 10,
//             fontSize: 13,
//         },
//         info: {
//             padding: 10,
//         },
//         title: {
//             color: COLOR.common.darkGrey,
//             fontWeight: 600,
//             fontSize: 20,
//             paddingBottom: 3,
//         },

//         price: {
//             fontWeight: 'bold',
//             color: COLOR.user.primaryShade[200],
//         },
//         address: {
//             fontSize: 13,
//             color: COLOR.user.primaryShade[200],
//         },
//         serviceItems: {
//             backgroundColor: COLOR.common.grey,
//             padding: 5,
//             paddingLeft: 15,
//             borderRadius: 50,
//             marginRight: 5,
//         },
//     },
//     small: {
//         image: {
//             height: 80,
//             width: 80,
//             backgroundColor: COLOR.common.grey,
//         },
//         info: {
//             flex: 1,
//             padding: 10,
//         },
//         title: {
//             fontSize: 12,
//             fontWeight: 500,
//         },
//         text: {
//             fontSize: 10,
//             padding: 3,
//             color: COLOR.common.darkGrey,
//         },
//     },
// })