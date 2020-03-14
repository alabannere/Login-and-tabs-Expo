import { AsyncStorage } from 'react-native';

export async function setStorage(key, item) {
   return await AsyncStorage.setItem(key, item);
}

export async function getStorage(key) {
    var item = await AsyncStorage.getItem(key);
    return item; 
}

export function newID(type) {
    var s1 = Math.random().toString(36).substr(2, 9).toUpperCase();
    var s2 = Math.random().toString(36).substr(2, 9).toUpperCase();
    var s3 = Math.random().toString(36).substr(2, 9).toUpperCase();
    var s4 = Math.random().toString(36).substr(2, 9).toUpperCase();
    var ID = type === 1 ? s1 : type === 2 ? s1+'-'+s2 : type === 3 ? s1+'-'+s2+'-'+s3 : type === 4 ? s1+'-'+s2+'-'+s3+'-'+s4 : 0;
    return  ID;
}


export async function removeStorage(key) {
    var item = await AsyncStorage.removeItem(key);
    return item; 
}



export function reverseGeocode(lat, lng, APIGOOGLE) {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${APIGOOGLE}`;
  return fetch(url).then((res) => res.json());
}



export function simpliMins(mins){
  let res;
  if(mins > 60){
    res = (mins / 60)
    return  Math.round(res)+'H';
  }else{
    return Math.round(mins)+'M';
  }
}

export function roundNumber(number){
  return Math.round(number);
}


export function formatDistance(distance){
  var mts = parseFloat(distance).toFixed(3).substring(2, 5) ;
  return distance < 0.500 ? Math.round(mts) + 'MTS' : parseFloat(distance).toFixed(0) + 'KM'
}



export function regionFrom(lat, lon, accuracy) {
  const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
  const circumference = (40075 / 360) * 1000;

  const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
  const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta: Math.max(0, latDelta),
    longitudeDelta: Math.max(0, lonDelta)
  };
}


function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels)
  });
}

