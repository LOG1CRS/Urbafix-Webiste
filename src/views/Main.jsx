import React from 'react';
import Hero from '../components/Main/Hero';
import WhoIsUrbafix from '../components/Main/WhoIsUrbafix';
import BlackService from '../components/Main/BlackService';
import WhiteService from '../components/Main/WhiteService';
import Statistics from '../components/Main/Statistics';
import Projects from '../components/Main/Projects';
import Questions from '../components/Main/Questions';

const Main = () => {
  return (
    <>
      <Hero />
      <WhoIsUrbafix />
      <BlackService type="horizontal" />
      <WhiteService type="vertical" />
      <BlackService type="proyectos" />
      <WhiteService type="mobiliario" />
      <BlackService type="productos" />
      <Statistics />
      <Projects />
      <Questions />
    </>
  );
};

export default Main;
