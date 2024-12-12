
import PropTypes from "prop-types";


function Hello(props) {

    
    return (
        <div>
            <h1>{props.message} {props.name}</h1>
        </div>
    )
}

Hello.propTypes = {
    message: PropTypes.string,
    name: PropTypes.string,
}

export default Hello;