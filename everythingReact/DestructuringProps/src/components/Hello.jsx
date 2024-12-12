import PropTypes from "prop-types";


function Hello({ name, message }) {
    
    return (
        <div>
            <h1>{message} {name}</h1>
        </div>
    )
}

Hello.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string
}


export default Hello;