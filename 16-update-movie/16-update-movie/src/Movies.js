import React, {useState} from 'react'

export default function Movies(){

    const [movies, setMovies] = useState(
        [
            {
            'id': 101,
            'title': 'Star Wars IV: A New Hope',
            'director': 'George Lucas'
            },
            {
            'id': 102,
            'title': 'The Lord of the Rings: The Fellowship of the Ring',
            'director': 'Peter Jackson'
            }
        ]
    )
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [indexToEdit, setIndexToEdit] = useState(0);
    const [toggleState, setToggleState] = useState(false);

    function toggleDisplay(){
      setToggleState(!toggleState);
    }

    function updateMovie() {

      let updatedMovie  = {
            id: movies[indexToEdit].id,
            title: title,
            director: director
      }

      let left = movies.slice(0, indexToEdit);
      let right = movies.slice(indexToEdit+1);
      let updatedMovies = [...left, updatedMovie, ...right];
      setMovies(updatedMovies);

    }


    return <React.Fragment>
      <div class="container">
        <div class="col">
          {movies.map((m, index) => (
            <React.Fragment>
              <div class="movie">
                <h1> {m.title} 
                    <button key={m.id}
                            onClick={()=>{  toggleDisplay()
                                            setIndexToEdit(index);
                                            setTitle(m.title);
                                            setDirector(m.director);
                            }}
                    >Edit</button> </h1>
                <h2> Directed by {m.director} </h2>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div class="col" style={{display: toggleState ? "block" : "none"}}>
            <h3>Edit Movie</h3>
            <div>
                <label>Movie Title:</label>
                <input type="text" name="title" value={title} onChange={(event)=> setTitle(event.target.value)} />
            </div>
            <div>
                <label>Director</label>
                <input type="text" name="director" value={director} onChange={(event)=> setDirector(event.target.value)} />
            </div>
            <button onClick={()=> {toggleDisplay(); updateMovie()}}>Update Movie</button>
        </div>
      </div>
    </React.Fragment>
}
