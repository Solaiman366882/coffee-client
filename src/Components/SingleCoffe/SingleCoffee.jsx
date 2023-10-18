import PropTypes from 'prop-types'

const SingleCoffee = ({coffee}) => {

    const {name,supplier,category,chef,taste,details,photo} = coffee || {};

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-2 border-sky-400 p-2">
                <figure><img src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Category : {category}</p>
                    <p>Chef : {chef}</p>
                    <p>Taste : {taste}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  flex-1">Watch</button>
                        <button className="btn flex-1">X</button>
                        <button className="btn flex-1">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleCoffee.propTypes = {
    coffee:PropTypes.object
}

export default SingleCoffee;