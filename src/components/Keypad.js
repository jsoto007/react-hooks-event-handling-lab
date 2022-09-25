// Code Keypad Component Here

function Keypad (){
    function handleInput(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Enter password"
            />
        </div>
    )
}

export default Keypad;