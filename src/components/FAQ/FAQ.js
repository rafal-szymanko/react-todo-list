import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.subtitle} image={faqContents.image} />
    <h2>{faqContents.title}</h2>
    <p>{faqContents.firstParagraph}</p>
    <p>{faqContents.secondParagraph}</p>
  </Container>
);



export default FAQ;