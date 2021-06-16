import React,{useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reducer from '../auth/store/reducers';
import withReducer from '../store/withReducer';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation1 from './_nav';
import navigation2 from './_DoctorNav';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.sidebarShow);
  const userType=useSelector(({user})=>user.userName);
 
useEffect(() => {
  console.log("slide_bar",userType);

}, [dispatch])

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>


        <CCreateElement
          items={navigation1}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

// export default React.memo(TheSidebar)
export default withReducer('user', reducer)(React.memo(TheSidebar));