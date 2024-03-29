// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Private, Router, Route } from "@redwoodjs/router"

import MainLayout from "src/layouts/MainLayout/MainLayout"
import ScaffoldLayout from "src/layouts/ScaffoldLayout"

import { useAuth } from "./auth"

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="home" roles={["admin", "member"]}>
        <Set wrap={ScaffoldLayout} title="Artworks" titleTo="memberArtworks" buttonLabel="New Artwork" buttonTo="memberNewArtwork">
          <Route path="/member/artworks/new" page={MemberArtworkNewArtworkPage} name="memberNewArtwork" />
          <Route path="/member/artworks/{id:Int}/edit" page={MemberArtworkEditArtworkPage} name="memberEditArtwork" />
          <Route path="/member/artworks/{id:Int}" page={MemberArtworkArtworkPage} name="memberArtwork" />
          <Route path="/member/artworks" page={MemberArtworkArtworksPage} name="memberArtworks" />
        </Set>
      </Private>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={ScaffoldLayout} title="Users" titleTo="adminUsers" buttonLabel="New User" buttonTo="adminNewUser">
          <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
          <Route path="/admin/users/{id:Int}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
          <Route path="/admin/users/{id:Int}" page={AdminUserUserPage} name="adminUser" />
          <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login">
        <Set wrap={MainLayout}>
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
