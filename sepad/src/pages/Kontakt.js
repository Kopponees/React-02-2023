import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

export const Kontakt = () => {
  const form = useRef();

  const saadaEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4nx0dl', 'template_r5xx2wi', form.current, 'nx1ro8Ex1SVIeMY_Q')
      .then((result) => {
        console.log(result.text);
        toast.success("Kiri on saadetud!"
        );
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className="row m-5">
      <div className="col-md-6 col-md">
        <h2>Kontakt</h2>
        <p>Võta meiega julgelt ühendust!</p>
        <form ref={form} onSubmit={saadaEmail}>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="name">Nimi:</label>
              <input type="text" className="form-control" autoFocus name="name" required />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" name="email" required />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="message">Sõnum:</label>
              <textarea className="form-control" type="text" name="message" maxLength="6000" rows="7" required></textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12 form-group">
              <Button variant="dark" type="submit" className="btn btn-primary">
                Saada
              </Button>
            </div>
          </div>
        </form>
      </div>
      <img className="sepptelefoniga" src="sepptelefoniga.png" alt="" style={{ maxWidth: "30%", height: "auto" }} />
      <ToastContainer theme='dark' />
    </div>
  );
};

export default Kontakt;
