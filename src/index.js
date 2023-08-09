import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import { validatIp, addTileLayer, getAddress, newIp } from "./helpers";
import L from 'leaflet';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input'),
    btn = document.querySelector('button');

    const ipInfo = document.querySelector('#ip');
    const locationInfo = document.querySelector('#location');
    const timezoneInfo = document.querySelector('#timezone');
    const ispInfo = document.querySelector('#isp');
    

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
    // iconAnchor: [22,94],
})


const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [50.4501, 30.5234],
    zoom: 13,
});
addTileLayer(map);
L.marker([50.4501, 30.5234], {icon: markerIcon}).addTo(map);

function getData() {
    if(validatIp(ipInput.value)) {
        getAddress(ipInput.value)
         .then(setInfo)

        newIp(ipInput.value)
            .then(setLocation)
    }
}
 function handleKey(e) {
     if (e.key === 'Enter') {
         getData();
     }
 }

 function setInfo(mapData) {
    
    
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
    
 }
 function setLocation(ipLocation) {
    const { latitude, longitude } = ipLocation;

    map.setView([latitude, longitude]);
    L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);
}