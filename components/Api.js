
let APIREST = 'http://www.iubi.hologramestudio.com/API_SMC/V1/';
let KEY = '&key=7869KGJD9879879KJKHJ987869L';
let APIGOOGLE = 'AIzaSyCCttTchNzvT67oTyQPUVTvcnTj7oMyd_A';
export default API = {

Auth(code) {
  var url = `${APIREST}?auth&code=${code}${KEY}`;
  return fetch(url).then((res) => res.json());
},




reverseGeocode(lat, lng) {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${APIGOOGLE}`;
  return fetch(url).then((res) => res.json());
},

Login(user, password) {
  var url = `${APIREST}?login&user=${user}&password=${password}`;
  return fetch(url).then((res) => res.json());
},

Register(firstname, lastname, email, password) {
  var data = `email=${email}&password=${password}&last_name=${lastname}&first_name=${firstname}`;
  var url = `${APIREST}?register&${data}`;
  return fetch(url).then((res) => res.json());
},






profile(id) {
  var url = `${APIREST}?profile&id=${id}`;
  return fetch(url).then((res) => res.json());
},




async UpdateProfile(id, row, value) {
  var url = `${APIREST}?UpdateProfile&id=${id}&row=${row}&value=${value}`;
  return await fetch(url).then((res) => res.json());
},

uploadImage(uid, localUri, type) {
  var url = `https://iubi.hologramestudio.com/API_SMC/V1/files/?uid=${uid}&dir=profile`;
  var formData = new FormData();
  formData.append('photo', {
    uri: localUri,
    name: 'profile',
    type,
  });
  return fetch(url, {
    method: 'POST',
    body: formData,
    header: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'multipart/form-data',
    },
  }).then((res) => res.text());

},

async post(id) {
  var url = `${APIREST}?posts&id=${id}`;
  return await fetch(url).then((res) => res.json());
},
async posts() {
  var url = `${APIREST}?posts`;
  return await fetch(url).then((res) => res.json());
},

async createPost(id_user, category, company, description, phone, address) {
  var url = `${APIREST}?createPost&id_user=${id_user}&category=${category}&company=${company}&description=${description}&phone=${phone}&address=${address}`;
  return await fetch(url).then((res) => res.json());
},

async removePost(id) {
  var url = `${APIREST}?removePost&id=${id}`;
  return await fetch(url).then((res) => res.json());
},


async postsCercanos(latitude, longitude, km) {
  var url = `${APIREST}?postsCercanos&latitude=${latitude}&longitude=${longitude}&km=${km}`;
  return await fetch(url).then((res) => res.json());
},





// FAVORITOS
async Favs(id) {
  var url = `${APIREST}?favs&id=${id}`;
  return await fetch(url).then((res) => res.json());
},
async AddFav(id, title, address, latitude, longitude){
  var url = `${APIREST}?addFav&id=${id}&title=${title}&address=${address}&latitude=${latitude}&longitude=${longitude}`;
  return await fetch(url).then((res) => res.json());
},
async RemoveFav(id,address){
  var url = `${APIREST}?removeFav&id=${id}&address=${address}`;
  return await fetch(url).then((res) => res.json());
},
//////////////////FUNCTIONS
////////////////////////////////////////////////////////////////////////

SimpliMins(mins){
  let res;
  if(mins > 60){
    res = (mins / 60)
    return  Math.round(res)+'H';
  }else{
    return Math.round(mins)+'M';
  }
},

  


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//API 2
////////////////////////////////////////////////////////////////////////




///////////////////////////////
}

