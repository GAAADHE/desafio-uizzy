import React from 'react';

import Layout from './componentes/Layout';
import MenuColumn from './componentes/MenuColumn';
import ContentArea from './componentes/ContentArea';
import MenuPatient from './componentes/MenuPatient';
import PatientInfo from './componentes/PatientInfo';
import TabsArea from './componentes/TabsArea';

import '@fortawesome/fontawesome-free/js/all.js';
import './global.css';
import './style.css';
//import 'antd/dist/antd.css'

//import ReactDOM from 'react-dom';


export default function Dashboard(){
  return(
    <Layout>
      <MenuColumn/>
      <ContentArea>
        <div className="profile-column">
         <MenuPatient/>
         <PatientInfo/>
        </div>
       <TabsArea/>
      </ContentArea>
    </Layout>
  );
}