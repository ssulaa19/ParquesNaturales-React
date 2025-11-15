// Implementar que al dar like se agregue el parqque a la lista de likedParks en el contexto

export function handleLike({ parque, addLike }) {
        fetch(``, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        addLike(parque);
        
    }