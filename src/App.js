import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote.js';

//Componente contenedor
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

//Componente botón de obtener Cita
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  backgournd-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //State de las frases
  const [quote, saveQuote] = useState({});

  //Llamar a la api
  /*
    ##########
    Forma tradicional
    ##########
  */
  const queryAPI = () => {
    //Llamada
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //Promesa
    const promise = api.then(response => response.json());
    promise.then(result => console.log(result));
  }

  /*
    ##########
    Forma moderna
    ##########
    await detiene la ejecución del código hasta que se cumpla la promesa
  */
  const queryAPIasync = async () => {
    //Llamada
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //Promesa
    const promise = await api.json();
    saveQuote(promise[0]);
  }

  //State para cargar una frase automáticamente al regargar la página
  useEffect(() => {
    queryAPIasync();
  }, []);


  return (
    <Container>
      <Quote
        quote={quote}
      />
      <Button
        onClick={queryAPIasync}
      >
        Cita
      </Button>
    </Container>
  );
}

export default App;
