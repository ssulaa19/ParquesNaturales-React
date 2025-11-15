import '../../style/ComunidadesList.css'
import { useFetch } from '../../hooks/useFetch';
import ComunidadCard from './ComunidadCard';


const ComunidadesList = () => {

    const { data: comunidades, loading, error } = useFetch('');

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
                    <div className="container bg-black bg-opacity-75">
                        <div className="row justify-content-center">
                            {comunidades.map((comunidad) => (
                                <ComunidadCard key={comunidad.id} comunidad={comunidad} />
                            ))}
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}

export default ComunidadesList;