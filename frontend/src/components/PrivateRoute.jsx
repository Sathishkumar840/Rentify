import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}



// allow read;
// allow write:if
// request.resource.size<2*1024*1024 &&
// request.resourse.contentType.matches('image/.*')