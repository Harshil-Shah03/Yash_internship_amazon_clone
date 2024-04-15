export default function Carousel(props) {
    const images = props.list;

    const carouselStyle = {
        width: '80%', 
        margin: '30px auto',
        
    };

    const imageStyle = {
        width: '50%', // Make images fill the container
        height: '50vh', // Maintain aspect ratio
        backgroundColor:"black"
    };

    return (
        <div style={carouselStyle}>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={image} style={imageStyle} className="d-block w-100" alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{color:"black"}}></span>
                    <span className="visually-hidden "style={{color:"black"}}>Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{color:"black"}}></span>
                    <span className="visually-hidden"style={{color:"black"}}>Next</span>
                </button>
            </div>
        </div>
    );
}
