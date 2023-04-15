import { useState } from 'react';
import Map from '../komponendid/Map';
import sepikojadFailist from '../data/sepikojad.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sepikojad() {
  const [coordinaates, setCoordinates] = useState({ lngLat: [58.5927, 25.8970], zoom: 7 });
  const [sepikojad] = useState(sepikojadFailist);

  // create a list of unique piirkond values
  const piirkonnad = Array.from(new Set(sepikojad.map(element => element.piirkond)));

  return (
    <div>
      <Button className="kõiksepikojad" variant="dark" onClick={() => setCoordinates({ lngLat: [58.5927, 25.8970], zoom: 7 })}>Kõik sepikojad</Button> <br />

      <ButtonGroup className="sepikojadnupud" variant="dark" vertical>
        {piirkonnad.map(piirkond => (
          <DropdownButton variant="dark"
            as={ButtonGroup}
            title={piirkond}
            id={`bg-vertical-dropdown-${piirkond}`}
          >
            {sepikojad
              .filter(element => element.piirkond === piirkond)
              .map(element => (
                <Dropdown.Item
                  key={element.name}
                  onClick={() =>
                    setCoordinates({
                      lngLat: [element.longitude, element.latitude],
                      zoom: 15
                    })
                  }
                >
                  {element.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        ))}
      </ButtonGroup>

      <Map mapCoordinaates={coordinaates} />
    </div>
  );
}

export default Sepikojad;
