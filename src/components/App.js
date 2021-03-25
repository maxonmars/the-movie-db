import Filters from "./Filters/Filters";

function App() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-4">
                    <div className="card" style={{width: "100%"}}>
                        <div className="card-body">
                            <h3>hee!</h3>
                            <Filters/>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    MoviesList
                </div>
            </div>
        </div>
    );
}

export default App;
