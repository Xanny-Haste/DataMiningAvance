import React, { useEffect } from 'react'
import {Navbar} from './datamining-comp/navBarPr';
import './App2.css'
import {Introduction} from './datamining-comp/introduction'
import {Plan} from './datamining-comp/planofexuction'
import {Outil} from './datamining-comp/Outils'
import {Shema} from './datamining-comp/Schema'
import {Collect} from './datamining-comp/Collect'
import {Dim} from './datamining-comp/Dem'
import {Fact} from './datamining-comp/Php';
import {Cube} from './datamining-comp/cube'
import {Date} from './datamining-comp/Date';
import { Int } from './datamining-comp/Recherche';
import { Con } from './datamining-comp/Conv';
import { Div } from './datamining-comp/Div';
import { Env } from './datamining-comp/Ent'
import {Pre} from './datamining-comp/Prediction'
function App2() {
  useEffect(() => {
    document.title = "Student Performance"
 }, []);
 
  return (
    <div className='rapport'>
          <Navbar />
          <div className='border'>
          <Int />
          <Plan />
          <Introduction />
          <Outil />
          <Shema />
          <Collect />
          <Dim />
          <Fact />
          <Cube />
          <Con />
          <Div />
          <Env />
          <Pre />
          <Date/>
          
      
          </div>
    </div>
  );
}

export default App2;
