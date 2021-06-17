import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import history from '../../../@history';
import Constants from "../../../utils/Constants";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import withReducer from 'src/store/withReducer'
import reducer from '../../../auth/store/reducers/index'
import * as Action from '../../../auth/store/actions'

let initialFormValues={
  email:'',
  password:'',
}
const Login = (props) => {

  const[formValues,setFormValue]=useState({...initialFormValues});

  const dispatch = useDispatch();
  const userLogin = (e) => {
    // let data = { userName: 'patient', password: 'aaaaaa' };
    let data ={email:formValues.email, password: formValues.password}
    e.preventDefault();
    dispatch(Action.submitLogin(data));   

  }
  const onMyChange=(v)=>{
    let value=v.target.value;
    let name=v.target.name;
    setFormValue({...formValues,[name]:value})

}
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                              type="text"
                              placeholder="email" 
                              autoComplete="email"
                              name="email"
                              value={formValues.email} 
                              onChange={onMyChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                              type="password" 
                              placeholder="Password" 
                              autoComplete="current-password"
                              name="password"
                              value={formValues.password}
                              onChange={onMyChange}
                              />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={userLogin} >Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withReducer('login', reducer)(Login);
