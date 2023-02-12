import { Link } from "react-router-dom";

function Deer(){
    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <div>Deer habitat</div>
        </div>
    )
}
export default Deer;
