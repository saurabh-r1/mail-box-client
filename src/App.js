//App.js

import Compose from "./components/Compose";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";

// import Login from "./Authentication/Login";

function App() {
  return (
    <>
    <Header />
    <div className="row">
      <div className="col-3" >
      <Sidebar />
      </div>
      <div className="col-8  mt-4 ">
      <Compose  />
      </div>
    
    
    </div>
    
  
      {/* <Login /> */}
    </>
  );
}

export default App;
