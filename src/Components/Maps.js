// Map.js
// // OpenStreetMap.js
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const OpenStreetMap = () => {
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default OpenStreetMap;
import { AimOutlined } from "@ant-design/icons";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = () => {
  const coordinates = [40.18417615366078, 44.51811116330319]; // Coordinates for Yerevan

  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
        <Popup>
          Yerevan, the capital of Armenia.
        </Popup>
        <AimOutlined />
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;