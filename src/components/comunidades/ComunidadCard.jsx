import { Link } from 'react-router-dom';
import './ComunidadCard.css'

const ComunidadCard = ({ comunidad }) => {
    return (
        <>
            <div className="col-2 p-2">
                <Link to={`/comunidad/${comunidad.id}/parques`} state={comunidad}>
                    <div className="card border-0 m-0 p-0 text-white">
                        <div className="image-card ">
                            <img src={`/img/c${comunidad.id}.gif`} alt="Title" className="img-fluid" />
                            <div className="overlay">
                                <h4 className=" text-center fs-6  bg-black bg-opacity-75">{comunidad.nombre}</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ComunidadCard;