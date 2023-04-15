import { useState } from 'react';
import Map from '../komponendid/Map';
import sepikojadFailist from '../data/sepikojad.json';

function Sepikojad() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [sepikojad] = useState(sepikojadFailist);
  return (<div>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik sepikojad</button>

    {sepikojad.map(element => (
      <button onClick={() => setCoordinates({ lngLat: [element.longitude, element.latitude], zoom: 13 })}>
        {element.name}
      </button>
    ))}
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Sepikojad;
