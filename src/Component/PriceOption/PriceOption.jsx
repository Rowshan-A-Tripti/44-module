import PropTypes from "prop-types";
import Feature from "../feature/feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-black">
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
              {
                  features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
              }
            </div>
            <button className="mr-12 w-full py-4 bg-green-600 font-bold hover:bg-green-900 text-black">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;