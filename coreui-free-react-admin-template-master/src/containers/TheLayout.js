import React,{useEffect,useState} from 'react'
import reducer from '../auth/store/reducers';
import withReducer from '../store/withReducer';
import { useSelector, useDispatch } from 'react-redux';
import history from '../@history';
import Constants from '../utils/Constants';

import AdminSlidebar from './Slidebars/AdminSlidebar';
import DoctorSlidebar from './Slidebars/DoctorSlidebar';
import LabAssistantSlidebar from './Slidebars/LabAssistantSlidebar';
import PatientSlidebar from './Slidebars/PatientSlidebar';
import NurseSlidebar from './Slidebars/NurseSlidebar';
import HeadNurseSlidebar from './Slidebars/HeadNurseSlidebar';

import {
  TheContent, 
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  const dispatch = useDispatch();
  const login=useSelector(({user})=>user.login);  
  let user = login ? login.user : null;
  let {userRole,firstName} = user;
  console.log(userRole);
  switch (userRole) {
    case  "admin" : {
      return (
        <div className="c-app c-default-layout">      
        <AdminSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }
    case "doctor": {
      return (
        <div className="c-app c-default-layout">      
        <DoctorSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }

    case "nurse" : {
      return (
        <div className="c-app c-default-layout">      
        <NurseSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }

    case "headnurse" : {
      return (
        <div className="c-app c-default-layout">      
        <HeadNurseSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }
    case "lab" : {
      return (
        <div className="c-app c-default-layout">      
        <LabAssistantSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }
    case "patient" : {
      return (
        <div className="c-app c-default-layout">      
        <PatientSlidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
            <TheContent/>
          </div>
          <TheFooter/>
        </div>
      </div>
      )
    }

    default: {
      history.push({
        pathname: Constants.PAGES.login
        })
    }
}
  

  
  
}


export default withReducer('user', reducer)(TheLayout);