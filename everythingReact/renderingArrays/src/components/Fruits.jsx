


export default function Fruits(){
    const fruits = ["Apple", "Blueberry", "Orange", "Mango", "Pineapple", "Banana"]

    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    // we need to use key={} and provide a unique key when using <li>
                    // but since the items do not have a unique id, we use the name of the array as a key.
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}