import axios from 'axios';
const backend_url = 'http://192.168.236.118:3000/api/v1';

export async function auth(userInfo) {
    let response;
    const dataToServer = {
        "phonenumber": userInfo.phonenumber,
        "password": userInfo.password,
    }
    console.log(dataToServer);
    await axios({
        method: 'POST',
        url: backend_url + '/login',
        data: dataToServer
    }).then (
        (res) => {
          response = res.data;
          console.log("Response" + JSON.stringify(res));
        }
      )
      .catch(
        error => {
          res = error.response.status;
          console.log("Error: " + error.response.status);
          
        }
    ) 
    return response;
}

export async function signup(userInfo) {
    let response;
    const dataToServer = {
        "fullname": userInfo.fullname,
        "phonenumber": userInfo.phonenumber,
        "username": userInfo.username,
        "password": userInfo.password,
    }
    await axios({
        method: 'POST',
        url: backend_url + '/signup',
        data: dataToServer
    }).then (
        (res) => {
          response = res.data;
          console.log("Response" + JSON.stringify(res));
        }
      )
      .catch(
        error => {
          res = error.response.status;
          console.log("Error: " + error.response.status);
          
        }
    ) 
    return response;
}

export async function getAllRoom() {
    const roomList = [];
    const response =  await axios.get(backend_url + '/room/get/all');
    console.log("123" + response);
    return response;
}

export async function getRoom(name) {
    const response =  await axios.get(backend_url + `/room/get/all/${name}`);
    // console.log(response);
    return response;
}