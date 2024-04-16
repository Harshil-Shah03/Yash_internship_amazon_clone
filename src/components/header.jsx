export default function Header(props){
    return(
            // <div classNameName="my-5">
            //     <div classNameName="p-5 text-center bg-body-tertiary">
            //         <div classNameName="container py-5">
            //             <h1 classNameName="text-body-emphasis">{props.heading}</h1>
            //             <p classNameName="col-lg-8 mx-auto lead">
            //                 {props.description}
            //             </p>
            //         </div>
            //     </div>
            // </div>
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">{props.heading}</h1>
                <p className="lead text-muted">{props.description}</p>
                <p>
                  <a href="#" className="btn btn-primary my-2">Main call to action</a>
                  <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
              </div>
            </div>
          </section>
          );
}