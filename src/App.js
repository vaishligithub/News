import React from "react";
import Nav from "./Component/Nav";
import { useState } from "react";
import "./App.css";
import News from "./Component/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  
  return (
    <>
    
      <Nav />
      {/* <News category="general"/> */}
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress}   key="general" country="in" category="general"/>}/> 

        <Route  path="/business" element={<News category="business" setProgress={setProgress}   key="business" />}/>
          
        
        <Route  path="/entertainment" element={<News category="entertainment" setProgress={setProgress} key="entertainment" />}/>
      
       
        <Route path="/sports" element={<News category="sports" setProgress={setProgress}  key="sports" />}/>
       
      
        <Route  path="/health" element={ <News category="health" setProgress={setProgress} key="health"/>}/>
       
        
        <Route   path="/general" element={ <News category="general" setProgress={setProgress} key="general"/>}/>
        
        
        <Route exact path="/science"  element={ <News category="science" setProgress={setProgress}  key="science"/>}/>
         
      
        <Route   exact path="/technology" element={<News category="technology" setProgress={setProgress} key="technology"/>}/>
    
     
      </Routes>
    
    </>
  );
}

export default App;
