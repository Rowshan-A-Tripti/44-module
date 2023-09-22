import PropTypes from "prop-types";
import { BiCheck } from "react-icons/bi";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center "><BiCheck className=" text-green-500 mr-2"></BiCheck>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;