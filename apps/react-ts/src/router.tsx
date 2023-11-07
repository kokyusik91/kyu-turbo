import { Routes, Route } from 'react-router-dom';
import Post from './post';
function Router() {
  return (
    <Routes>
      <Route path='post' element={<Post />} />
    </Routes>
  );
}

export default Router;
