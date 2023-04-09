import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export const Kontakt = () => {
  const form = useRef();

  const saadaEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4nx0dl', 'template_r5xx2wi', form.current, 'nx1ro8Ex1SVIeMY_Q')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    < form className="kontaktv2li" ref={form} onSubmit={saadaEmail}>
      <label>Nimi</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Sõnum</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Saada" /> <br />
    </form>
  );
};

export default Kontakt;