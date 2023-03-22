import React, { useState } from 'react';

function HaldaUudiseid() {
    const [uudised, muudaUudiseid] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

    const kustuta = (index) => {
        uudised.splice(index,1);
        muudaUudiseid(uudised.slice());
        localStorage.setItem("uudised", JSON.stringify(uudised));

    }

    return (
        <div>
            <div>{uudised.map((uudis, index) => <div>
                <div className="haldauudiseidtekst">{uudis}</div>
                <button onClick={() => kustuta(index)}>x</button>
            </div>
            )}</div>
        </div> );
}

export default HaldaUudiseid