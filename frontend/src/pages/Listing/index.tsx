import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {


    // FORMA ERRADA//

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    })



    return (
        <div>
            <Pagination />

            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
            </div>
            
           
        
        </div>
    );

}

export default Listing;