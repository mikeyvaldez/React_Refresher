import PropTypes from "prop-types";

// props are considered immutable in React
// you cannot change or mutate the props in anyway

export default function Hello(props) {
    
    // props.name = "Mikayla";   // this would cause an error because of immutability of props 

    return (
        <div>
            <h1>{props.message} {props.name}</h1>
        </div>
    )
}

Hello.propTypes = {
    props: PropTypes.string,
    message: PropTypes.string,
    name: PropTypes.string
}

