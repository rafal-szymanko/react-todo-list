import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContents } from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoContents.subtitle} image={infoContents.image}/>
    <h2>{infoContents.title}</h2>
    <p>{infoContents.firstParagraph}</p>
  </Container>
);

export default Info;