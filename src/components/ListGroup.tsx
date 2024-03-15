// importing Fragment to prevent additional DOM eg <div></div>

// import { Fragment } from "react/jsx-runtime";

// creating a function ListGroup

function ListGroup(){
    const cities = [
        'New York',
        'London',
        'Silicon Valley',
        'Redmond',
        'San Fracisco'
    ];

    if (cities.length === 0) {
        return (
            <>
                <h1 className="text text-primary">List Group</h1>
                <p className="text text-danger">No item found!</p>
            </>
        );
    }

    else {
        return (
            <>
                <h1 className="text text-primary">List Group</h1>
                <ul className="list-group col-6">
                    {cities.map((city) => {
                        return (<li className="list-group-item" key={city} onClick={() => console.log(city)} > {city} </li>);
                    })}
                </ul>
            </>
        );
    }
}

export default ListGroup;