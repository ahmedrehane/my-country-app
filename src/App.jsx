import { useState,useEffect } from 'react';
import CardList from './components/CardList'





function App() {
  const [myCountry, setMyCountry] = useState([])
  const url = "https://restcountries.com/v3.1/all"
 



  useEffect(()=>{
    fetch(url)
     .then(response=>response.json())
    .then(data =>{
      // console.log(data)
      setMyCountry(data)
    })
    .catch(error=>console.log(error))
  },[])

  console.log(">>>>>",myCountry)

  
  return (
    <>

      <CardList count = {myCountry}/>
      
      
      

    </>
  )
}

export default App
