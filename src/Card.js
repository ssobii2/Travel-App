
const Card = (props) => {
    
    return ( 
        <div className="card-container">
            <img className="card-img" src={props.imageUrl} alt="alt"/>
            <div className="card-desc">
                <div className="card-text">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date"><strong>{props.startDate} - {props.endDate}</strong></p>
                <p className="txt">{props.description}</p>
            </div>
            <hr></hr>
        </div>
    );
}
 
export default Card;