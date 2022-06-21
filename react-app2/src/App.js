import { Routes, Route, } from "react-router-dom";

import {
  Layout,
  UsersPage,
  UserDetailsPage,
  UserPosts,
  PostsPage,
  PostsDetailsPage,
  PostCommentsPage,
  AlbumsPage,
  PhotosPage,
  NotFoundPage
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'users'} element={<UsersPage />}>

            <Route path={':id'} element={<UserDetailsPage />}>
              <Route path={'posts'} element={<UserPosts />} />
            </Route>

            <Route path={':id/albums'} element={<AlbumsPage/>}>
              <Route path={':albums/photos'} element={<PhotosPage/>}/>
            </Route>

          </Route>
          <Route path={'posts'} element={<PostsPage />}>
      
            <Route path={':id'} element={<PostsDetailsPage />}>
              <Route path={'comments'} element={<PostCommentsPage />} />
            </Route>
            
          </Route>
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;
