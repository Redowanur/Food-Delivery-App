const Popup = ({message, isSuccess}) => {
    return (
        <div className="w-72 h-14 bg-white fixed top-10 right-10 z-50 shadow-md bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <p>{message}</p>
        </div>
    )
}

export default Popup
