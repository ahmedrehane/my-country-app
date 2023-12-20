const Card = ({count})=>{
    return(
        
        
       
         <div className="flex flex-row"  >
           <img src={count.flags.png} alt={count.name.common} />
           <h1>{count.name.common}</h1>
           <h4>Population : {count.population}</h4>
           <h5>Region : {count.region}</h5>
           <h6>Capital: {count.capital}</h6>
           
         </div>
        

    
    )
}

export default Card
