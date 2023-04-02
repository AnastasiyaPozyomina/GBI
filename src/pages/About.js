import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselBox from '../components/CarouselBox';
import AboutContentLeft from '../components/Content/AboutContentLeft';
import Footer from '../components/Footer/Footer';
import PanelBottom from '../components/Header/Panel/PanelBottom/PanelBottom';
import PanelTop from '../components/Header/PanelTop/PanelTop';
import SearchForm from '../components/SearchForm/SearchForm';
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