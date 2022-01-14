import React from "react";

const Home = ({ star = [] }) => {
    return (
        <div className="row">
            {
                star.map((item, index) => (
                    <div key={index} className="col mb-4"> 
                    <div className="card" style={{minWidth: "200px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <hr />
                        <p>{item.eye_color}</p>
                        <p>{item.gender}</p>
                        <p>{item.birth_year}</p>
                </div> 
                    </div>
                </div>
                ))}
        </div>
    )
}

export default Home