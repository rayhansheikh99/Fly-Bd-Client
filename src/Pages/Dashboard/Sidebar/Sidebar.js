import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
 
const Sidebar = () => {
    const {admin, user, logOut} = useAuth();
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
           FLY BD
          </a>
        </CDBSidebarHeader>
 
        <CDBSidebarContent className="sidebar-content">
        
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {admin &&<NavLink exact to="/addproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="plus-circle">Add Product</CDBSidebarMenuItem>
            </NavLink>}
            {admin &&<NavLink exact to="/makeadmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="user">Make Admin</CDBSidebarMenuItem>
            </NavLink>}
            {admin &&<NavLink exact to="/manageorders" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="tasks">
                Manage Orders
              </CDBSidebarMenuItem>
            </NavLink>}
            {admin &&<NavLink exact to="/manageproducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="tasks">
                Manage Products
              </CDBSidebarMenuItem>
            </NavLink>}
            {user?.email &&<NavLink exact to="/myorders" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="tasks">
              My Orders
              </CDBSidebarMenuItem>
            </NavLink>}
            {user?.email &&<NavLink exact to="/review" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="asterisk">
              Review
              </CDBSidebarMenuItem>
            </NavLink>}
            {user?.email &&<NavLink exact to="/payment" activeClassName="activeClicked">
              <CDBSidebarMenuItem className='text-white' icon="money-check-alt">
              Payment
              </CDBSidebarMenuItem>
            </NavLink>}
            <NavLink
              onClick={logOut} as={Link} to="/login"
            >
              <CDBSidebarMenuItem icon="sign-out-alt">
                Log Out
              </CDBSidebarMenuItem>
            </NavLink>
          
        </CDBSidebarContent>
 
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
 
export default Sidebar;
