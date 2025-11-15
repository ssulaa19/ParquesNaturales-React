import { useContext } from "react";
import { handleLike } from "../../hooks/handleLike";
import { LikeContext } from "../../context/LikeContext";

const ParqueCard = ({ parque }) => {

    const { likedParks, addLike } = useContext(LikeContext);

    const parqueLiked = likedParks.find(p => p.id === parque.id);


    return (
        <>
            <div className="col-lg-6 d-flex p-3">
                <div className="card bg-dark text-white border border-1 border-white">
                    <img className="card-img" src={parque.imagen} alt="Title" />
                    <div className="card-img-overlay">
                        <img src={parque.mapa} alt="" width="60px" />
                    </div>

                    {!parqueLiked ? <>
                        <div className="d-flex text-black position-absolute top-0 end-0 align-items-center m-2 badge bg-warning justify-content-center">
                            <button onClick={() => handleLike({ parque, addLike })} className="p-0 bg-transparent border-0">
                                <img src="/img/pulgar-arriba.png" alt="" width="30px" />
                            </button>
                            <span>{parque.likes}</span>
                        </div>
                    </> : <div className="d-flex text-black position-absolute top-0 end-0 align-items-center m-2 badge justify-content-center">
                        <span className="badge bg-success">Me gusta</span>
                    </div>}


                    <div className="card-body">
                        <h4 className="card-title text-center">{parque.nombre}</h4>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ParqueCard;


// Para cuando un usuario le da "me gusta" a un parque
// <span className="badge bg-success">Me gusta</span>