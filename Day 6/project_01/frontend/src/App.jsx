 import React from 'react'
 import MoodDetection from './components/MoodDetection'
 function App() {
    const [Song , setSong] = React.useState([
      ]);
   return (
     <MoodDetection Song={Song}/>
   )
 }
 
 export default App