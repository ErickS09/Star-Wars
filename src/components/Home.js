import React from "react";
import { Link } from "react-router-dom";


const Home = ({ star = [] }) => {
    console.log(star)
    return (
        <div className="row">
            {
                star?.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                <hr />
                                <p>Color de ojos: {item?.eye_color}</p>
                                <p>Cumpleaños: {item?.birth_year}</p>
                                {item?.vehicles?.map((v,x) => (
                                    <div key={x}>
                                    <Link to={{
                                        pathname: '/vehicle',
                                       search: `?url=${v}`
                                    }}>{v}</Link>
                                    </div>
                                ))}
                             
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Home