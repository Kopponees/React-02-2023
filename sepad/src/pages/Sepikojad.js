// import { useState} from 'react';
// import Map from '../../components/Map';

// function Sepikojad() {
//   const [coordinaates, setCoordinates] = useState({ lngLat: [59.4378, 24.7574], zoom: 11 });
//   const [shops, setShops] = useState([

//   ]);



//   return (<div>
//     <button onClick={() => setCoordinates({ lngLat: [58.7082, 25.6118], zoom: 6 })}>Kõik poed</button>
//     <button onClick={() => setCoordinates({ lngLat: [59.4350, 24.7519], zoom: 11 })}>Kõik Tallinna poed</button>

   
//     {shops.map(element => 
//      <button onClick={() => setCoordinates({ lngLat: [element.longitude, element.latitude], zoom: 13 })}>
//       {element.name}
//       </button>
//       )}

//     <Map mapCoordinaates={coordinaates} />
//   </div>)
// }

// export default Sepikojad;