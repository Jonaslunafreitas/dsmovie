import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {

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