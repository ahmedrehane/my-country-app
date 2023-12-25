const Card = ({count})=>{
    return(
        
        
       
         <div>
           <img src={count.flags.png} alt={count.name.common} />
           <h2>{count.name.common}</h2>
           <h4>Population : {count.population}</h4>
           <h5>Region : {count.region}</h5>
           <h6>Capital: {count.capital}</h6>
           
         </div>
        

    
    )
}

export default Card
