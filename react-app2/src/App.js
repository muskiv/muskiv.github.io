import { Routes, Route, } from "react-router-dom";

import './App.css';
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./components/Layout/Layout";
import { UserDetailsPage } from "./pages/UsersDetailsPage/UserDetailsPage";
import { UserPosts } from "./pages/UserPosts/UserPosts";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'users'} element={<UsersPage />}>
            <Route path={':id'} element={<UserDetailsPage />}>
              <Route path={'posts'} element={<UserPosts />} />
            </Route>
          </Route>
          <Route path={'posts'} element={<PostsPage />}>

          </Route>
          <Route path={'*'} element={<NotFoundPage />} >

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
