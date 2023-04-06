
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import MyNavbar from './Components/MyNavbar';
import News from './Components/News';


import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Addnews from './Components/Addnews';



 const App=()=>  {
 
  const[progress,setProgress]=useState(0)
   const apiKey="d51faa4f200446e8aaf3fc1fa50c9b66"


    return (
      <div>

      


        <>
      
      <BrowserRouter>
      <MyNavbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
       
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="container-fluid">
          <div className="row">
            <div className="col min-vh-120">
     

              <Routes>
                <Route exact path="/home"  element ={ <News setProgress={setProgress} apiKey={apiKey}  key="home" page_size={5}  category="general"/>} />
                <Route exact path="/bussiness" element={ <News setProgress={setProgress}  apiKey={apiKey}  page_size={5} key ="bussiness"  category="business"/>} />
                <Route exact path="/entertainment"  element={ <News setProgress={setProgress}  apiKey={apiKey} key="entertainment" page_size={5} country="in" category="entertainment"/>} />
                <Route exact path="/health"  element={ <News setProgress={setProgress}  apiKey={apiKey} page_size={5} key="health"  category="health"/>} />
                <Route exact path="/science"  element={ <News setProgress={setProgress} apiKey={apiKey}  page_size={5} key="science" category="science"/>} />
                <Route exact path="/sports"  element={ <News setProgress={setProgress} apiKey={apiKey}  page_size={5} key="science"  category="sports"/>} />
                <Route exact path="/technology"  element={ <News setProgress={setProgress} apiKey={apiKey}  page_size={5} key="technology"  category="technology"/>} />
                <Route exact path="/login" element={<Login></Login>}/>
                <Route exact path="/Signup" element={
            
                <Signup></Signup>
                
                }/>
                                <Route exact path="/ADDNews" element={<Addnews></Addnews>}/>

        
           

               



              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      {/* <Individual_Recipe></Individual_Recipe> */}
    </>
  
      </div>
    )
  
}


export default App;
