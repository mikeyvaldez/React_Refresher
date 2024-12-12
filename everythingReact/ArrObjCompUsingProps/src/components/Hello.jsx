import PropTypes from "prop-types";

// export default function Hello({name, message, seatNumbers}) {
//   return (
//     <div>
//         <h1>
//             {message} {name} {seatNumbers}
//         </h1>
//     </div>
//   )
// }

export default function Hello({ person }) {
  return (
    <div>
        <h1>
            {person.message} {person.name} {person.seatNumbers}
        </h1>
    </div>
  )
}

Hello.propTypes = {
    person: PropTypes.object,
    message: PropTypes.string,
    name: PropTypes.string,
    seatNumbers: PropTypes.arrayOf(PropTypes.number)
}
