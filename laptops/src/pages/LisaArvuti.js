import {useState} from "react";

function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!")
    const [ostuKorvTuhi, ostuKorviLisatud ] = useState(true);

    function addProduct() {
    setMessage("Arvuti lisatud")
    ostuKorviLisatud(false);

    }

  return (
    <div>
        <div>Sõnum: {message}</div>
        <label>Mark</label> <br />
        <input type="text" /> <br />
        <label>Mudel</label> <br />
        <input type="text" /> <br />
        <label>Maksumus</label> <br />
        <input type="text" /> <br />
        <label>Sisesta</label> <br />
        <input type="text" /> <br />
        { ostuKorvTuhi === true && <button onClick={() => addProduct()}>Sisesta</button>}
    </div>
  )
}

export default LisaArvuti