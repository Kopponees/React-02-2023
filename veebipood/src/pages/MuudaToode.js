import React, {useRef} from 'react';
import {useParams} from 'react-router-dom';
import tootedFailist from '../data/tooted.json';
import {useNavigate} from 'react-router-dom';


function MuudaToode() {
  const nimiRef = useRef();
  const { index } = useParams();// UseParams on reacti hook,nagu useState või ref
  //mida ei eksisteeri tavalises javascriptis. mingisugune imporditav funktsionaalsus node_modulest.
  //useSuperpower(koodilühendus)
  
  const leitud = tootedFailist[index];  

  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    navigate("/halda-tooted"); //tegemist on täpselt sama asjaga nagu <Link>
    //mõlemad vahetavad URL-i
    //kui URL-i vahetuseda teen ka mingi koodilõigu(praegusel juhul muudan toodet)
    //Siis võiks teha URL-i vahetuse koodilõigu järel(selleks on seda vaja teha javascriptis)
   } 
    // onClick={() =>f()} 1.kui otse kasutame useState paremat funktsiooni.
    //2. kui on onClick nupp .map( tsükli sees)
    //millisel juhul mida saata?
    //3. järjekorranumber, kui muudan/kustutan
    //4. element ise, kui lisan
  
  return (
    <div>
     {leitud !== undefined && <div> <label>Toote nimi</label> <br />
      <input ref= {nimiRef} type="text" autoFocus defaultValue={leitud}/> <br />
      <button onClick={muuda}>Sisesta</button> <br />
    </div>}

      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default MuudaToode