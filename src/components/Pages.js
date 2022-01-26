import React from "react";

const Pages = ({ prev, sig, onPrevious, onNext }) => {
    const previous = () => {
        onPrevious();
    }
    const next = () => {
        onNext();
    }

    return (
        <div>
            <nav className="my-5" >
                <ul className="pagination justify-content-center">
                    {sig ? <li className="page-item">
                        <button className="page-link" onClick={previous}>Previous</button>
                    </li> : null}
                    {prev ? <li className="page-item">
                        <button className="page-link" onClick={next}>Next</button>
                    </li> : null}
                </ul>
            </nav>
        </div>
    )
}

export default Pages;