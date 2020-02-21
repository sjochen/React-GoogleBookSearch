import React from "react"

function results(props) {

    if (props.data === undefined) {
        return ("")
    } else {



        return (
            <div>
                <p>{props.name}</p>

                {props.data.map((name, index) => {
                    return (
                        <div className="results">
                            <h3>Title:</h3>
                            <p>{name.volumeInfo.title}</p>

                            <h3>Author:</h3>
                            <p>{name.volumeInfo.authors.map(auth => (
                                auth
                            ))}</p>

                            <h3>Desciption:</h3>
                            <p>{name.volumeInfo.description}</p>

                            <h3>Link:</h3>
                            <p><a href={name.volumeInfo.infoLink}>{name.volumeInfo.infoLink}</a></p>

                            <h3>Image:</h3>
                            <p><img src={name.volumeInfo.imageLinks.thumbnail} alt="Logo" /></p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default results