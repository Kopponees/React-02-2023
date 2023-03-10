import React, { useRef, useState} from'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
    const emailViide = useRef(); // useRef st alati imprt
    const telefonViide = useRef(); // alati inputi külge
    const aadressViide = useRef(); //viide === reference

    // const muudaKeelEst = () => { 
    //     uuendaKeel("est");
    //     localStorage.setItem("keel","est");
    // }
    // const muudaKeelEng = () => { 
    //     uuendaKeel("eng");
    //     localStorage.setItem("keel","eng");
    // }
    //     const muudaKeelRus = () => { 
    //         uuendaKeel("rus");
    //         localStorage.setItem("keel","rus");
    //     }

    const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel);
        localStorage.setItem("keel", uusKeel);
    }

        const salvestaEmail = () => {
            localStorage.setItem("email", emailViide.current.value);
            if (emailViide.current.value.includes("@")) {
           toast.success("E-mail salvestatud"); 
        } else {toast.error("E-mail ei ole korrektne");
    }
        }
        const salvestaTelefon = () => {
            localStorage.setItem("telefon", telefonViide.current.value);
            if (/^\d+$/.test(telefonViide.current.value)) {
                toast.success("Telefon salvestatud!")
            } else {
                toast.error("Telefon ei ole ainult numbritest koosnev!")
            }
            ;
        }
        const salvestaAadress = () => {
            localStorage.setItem("aadress", aadressViide.current.value);
            if (aadressViide.current.value[0] === aadressViide.current.value.charAt(0).toUpperCase(0)){
                toast.success("Aadress salvestatud");
            } else {
                toast.error("Aadress ei ole salvestatud")
            }
        }

  return (
    <div>
        <label>E-mail</label>
        <input ref={emailViide}  defaultValue={localStorage.getItem("email")} type="text" />
        <button onClick={salvestaEmail}>Sisesta</button> 
        <br />
        <label>Telefon</label>
        <input ref={telefonViide} defaultValue={localStorage.getItem("telefon")} type="text" />
        <button onClick={salvestaTelefon}>Sisesta</button> 
        <br />
        <label>Aadress</label>
        <input ref={aadressViide} defaultValue={localStorage.getItem("aadress")}type="text" />
        <button onClick={salvestaAadress}>Sisesta</button> 
        <br />
        <button onClick={() =>muudaKeel("est")} className={keel === "est" ? "aktiivne-keel" : undefined }>Eesti keelseks</button>
        <button onClick={() =>muudaKeel("eng")} className={keel === "eng" ? "aktiivne-keel" : undefined }>To English</button>
        <button onClick={() =>muudaKeel("rus")}className={keel === "rus" ? "aktiivne-keel" : undefined }>Na Russkom Jasõke</button>
        {keel === "est" && <div>Leht on eestikeelne</div>}
        {keel === "eng" && <div>Page is in english</div>}
        {keel === "rus" && <div> Ctraniza na Russkom jasõke</div>}
        
        <ToastContainer 
        position="bottom-right"
        theme="dark"
        />

    </div>
  )
}

export default Seaded