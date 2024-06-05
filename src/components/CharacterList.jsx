import { useEffect, useState } from "react";
//import Character from "./Character";

function NavPage(props){
    return (
        <header className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary btn-sm"
                onClick={()=> props.setPage(props.page - 1)}>
                Page {props.page - 1}
            </button>
            <button className="btn btn-primary btn-sm"
                onClick={()=> props.setPage(props.page + 1)}>
                Page {props.page + 1}
            </button>
        </header>
    )
}

function CharacterList (){

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)


    useEffect(()=>{
    async function fetchData() {
    
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await res.json();
    setLoading(false);
    setCharacters(data.results);
    }

    fetchData()
    }, [page]);

    
    return (
    <div className="container /*bg-danger*/">

        

        {loading ? (
            <h1>Loading...</h1>
        ) : (
            
            <div className="row">
            <NavPage page={page} setPage={setPage} />
        {characters.map((character) => {
        return(
            // <Character key={character.id} character={character} />
            <div className="col-md-4" key={character.id} >
                <div className="text-center p-5">
                    <h3>{character.name}</h3>
                    <h5>{character.gender}</h5>
                    <h6>{character.status}</h6>
                    <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
                    <p>{character.origin.name}</p>
                </div>
            </div>
        );
    })
    }   <NavPage page={page} setPage={setPage} />
        </div>
        )

        }
    
    </div>
)
}

export default CharacterList