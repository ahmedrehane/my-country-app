import Card from "./Card"
const CardList = ({count}) =>{
    return(
       <div>
            {count.map((item)=>(
                <Card key={item.name.common} count={item}/>
                
            ))}
        </div> 
   
    )
    }
export default CardList