import React from 'react';

import Hero from '../components/AboutUs/Hero';
import MissionVision from '../components/AboutUs/MissionVision';
import Badge from '../components/AboutUs/Badge';
import Solutions from '../components/AboutUs/Solutions';
import Process from '../components/AboutUs/Process';
import Phrase from '../components/AboutUs/Phrase';
import Clients from '../components/AboutUs/Clients';

const AboutUs = () => {
  return (
    <>
      <Hero />
      <MissionVision />
      <Badge type="trust" />
      <Solutions />
      <Badge type="quality" />
      <Process />
      <Badge type="treatment" />
      <Phrase />
      <Badge type="clients" />
      <Clients />
    </>
  );
};

export default AboutUs;
