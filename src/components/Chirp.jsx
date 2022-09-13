const Chirp = ({ userName, thoughts, key }) => {
    return (
        <>
            <div className='col-md-6' key={`user-card-${key}`}>
                <div className="card shadow my-2">
                    <div className="car-body">
                        <h4 className="card-title">{userName}</h4>
                        <p className="card-text">{thoughts}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chirp;
