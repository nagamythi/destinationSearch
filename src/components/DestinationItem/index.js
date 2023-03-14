
import './index.css'
const DestinationItem=props=>{
    const {destinationDetails}=props
    const{name,imgUrl}=destinationDetails
    return(
        <li className='list'>
            <img src={imgUrl} className="img1" alt={name}/>
            <p className="title">{name}</p>
        </li>
    )
}
export default DestinationItem