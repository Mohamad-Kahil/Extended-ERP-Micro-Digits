import { Navigate } from "react-router-dom";

function Home() {
  // Redirect to login page
  return <Navigate to="/login" replace />;
}

export default Home;
