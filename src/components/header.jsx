export default function Header(props){
    return(
            <div className="my-5">
                <div className="p-5 text-center bg-body-tertiary">
                    <div className="container py-5">
                        <h1 className="text-body-emphasis">{props.heading}</h1>
                        <p className="col-lg-8 mx-auto lead">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
          );
}