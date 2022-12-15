import axios from 'axios';
const backend_url = 'http://172.16.2.62/document';

export async function auth(userInfo) {
    let response;
    const dataToServer = {
        "username": userInfo.username,
        "password": userInfo.password,
    }
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

export async function getRoom() {
    const roomList = [];
    const response =  await axios.get(backend_url + '/get/all');
    console.log(response);
    return response;
}