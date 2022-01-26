import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'




function Vehicles() {

    const { search } = useLocation();
    const splitedUrl = search.split('=')
    const url = splitedUrl[1]
    const [state, setState] = useState({})

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => setState(data))

    }, [url])


    return (
        <div className='container mt-5'>
            <div className="card" style={{ minwidth: "300px" }}>
                <div className='card-body'>
                    <h5 className='card-title'>{state.name}</h5>
                    <hr />
                    <p>Modelo: {state.model}</p>
                    <p>Fabricante: {state.manufacturer}</p>
                </div>
            </div>
        </div>

    )

}


export default Vehicles
