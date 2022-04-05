import React from 'react'
// import { Switch, Route } from 'react-router-dom' // old
import { BrowserRouter, Routes as Switch, Route /* Navigate */ } from 'react-router-dom' // updated to latest

// https://reactrouter.com/docs/en/v6/upgrading/v5
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

import Home from './pages/Home'
// import Product from './pages/Products/ProductDetail'
// import Products from './pages/Products/ProductsCheckout'
import LogIn from './pages/Login'
// import ForgotPassword from './pages/ForgotPassword'
// import VerificationPage from './pages/VerificationPage'
// import ResetPassword from './pages/ResetPassword'
// import Signup from './pages/Signup'
// import EditProfile from './pages/EditProfile'
// import AdminPage from './pages/Admin'

const Routes = () => (
  <main>
    <BrowserRouter>
      <Switch>
        {<Route path="/" element={<Home />} /> }
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/signup" element={<Signup />} />
      <Route path="/editprofile" element={<EditProfile />} /> */}
        {/* <Route path="*" element={<Navigate to ="/" />}/> */}
        {/* <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} /> */}
      </Switch>
    </BrowserRouter>
  </main>
)

export default Routes
