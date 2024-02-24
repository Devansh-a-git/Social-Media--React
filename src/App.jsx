import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

import PostListProvider from "./dataStore/PostList.data";

function App() {
  return (
    // <div data-bs-theme="dark">
    <PostListProvider>
      <div className="main">
        <Sidebar></Sidebar>
        <div className="cont">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
    // </div>
  );
}

export default App;
