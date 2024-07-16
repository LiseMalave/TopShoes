import React from 'react'
import { NavSpace } from '../About/About'
import Footer from '../Footer/Footer.jsx'
import { ContactContainer, ContactInfo, ContactText } from './Contact.js'

function Contact() {
  return (
    <>
      <NavSpace></NavSpace>
      <ContactContainer>
        <ContactInfo>
          <ContactText>
          <h2>Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar! </h2>

          </ContactText>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input type='text' id='nombre' placeholder='Escribe tu nombre'></input>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id='apellido' placeholder='Escribe tu apellido' />
          <label htmlFor="mail">Correo</label>
          <input type="email" id='mail' name='mail' placeholder='Escribe tu correo'/>
          <label htmlFor="asunto">Asunto</label>
          <input type="text" name="asunto" id="asunto" />
          <textarea name="mensaje" id="mensaje" cols="56" rows="8"></textarea>
          <button ><a href="#">Enviar</a></button>
        </form>
        </ContactInfo>
        
      </ContactContainer>
      <Footer></Footer>
    </>
  )
}

export default Contact