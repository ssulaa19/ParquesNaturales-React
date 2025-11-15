import { useParams, useLocation } from "react-router-dom";
import ParqueCard from './ParqueCard'
import '../../style/ParqueList.css'
import { useFetchParqueID } from "../../hooks/useFetch";


const ParqueList = () => {

    const { comunidadID } = useParams();
    const comunidadParque = useLocation().state;

    const { data: parques, loading, error } = useFetchParqueID(comunidadID);

    if (loading) return <div className="container text-center text-danger text-bg-warning p-3 rounded-3">
        <p>Loading...</p>
    </div>;
    if (error) return <div className="container text-center text-danger text-bg-warning  p-3 rounded-3">
        <p>Error: {error.message}</p>
    </div>;


    return (
        <>
            <body>
                <main>
                    <div className="container bg-black bg-opacity-75 text-white ">
                        <div className="row m-0 justify-content-center">
                            {parques.map(parque => (
                                <ParqueCard parque={parque} key={parque.id} />
                            ))}
                        </div>
                        <img src={`/img/c${comunidadParque.id}.gif`} className="position-fixed imagenComunidad bottom-0 end-0 translate-middle" width="100px" alt="" />

                    </div>
                </main>
            </body>
        </>
    )
}

export default ParqueList;