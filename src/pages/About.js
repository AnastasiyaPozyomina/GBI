import React from 'react';
import AboutContentLeft from '../components/Content/AboutContentLeft';
import Sponsors from '../components/Sponsors';
import Subscription from '../components/Subscription';
import Layout from '../components/Layout';


 const About = () => {
  return (
    <>
    <Layout>
    <AboutContentLeft />
    <Subscription />
    <Sponsors />  
    </Layout>
    </>
  );
}

export default About;