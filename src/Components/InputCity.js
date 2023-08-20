const InputCity = ({city, onInputHandler, onSubmitHandler}) => {

    return (
        <>
            <form>
                <label>
                    Search city to get weather information from:
                    <input className="input"
                        type="search"
                        name="name"
                        value={city}
                        placeholder="City name..."
                        onChange={onInputHandler}
                    />
                </label>
                <input className="input_btn"
                    type="submit"
                    value="Submit"
                    onChange={onSubmitHandler}
                />
            </form>
        </>
    )
}

export default InputCity;
