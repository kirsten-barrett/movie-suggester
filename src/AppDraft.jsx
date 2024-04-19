//import './app.css';

const tmdbKey = '87145707317c9c43dde360d5b1e8dffb';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

//returns an array of genre objects from tmdb
const getGenres = async () => {
    const genreEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            for (const genre of genres) {
                const contents = await fs.readFile(file, 'utf8');
                console.log(contents);
              }
            return genres[1].name;
            
        }
    } catch (err) {
        console.log(err);
    }
}
    
console.log(getGenres())
    
const populateGenreDropdown = (genres) => {
    const input = document.getElementById('genres')
    
    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        input.appendChild(option);
        }
    return (
        <ul>
            <label>
            <input type="checkbox" id="genres" value={genre} />
            {genre}
            </label>
        </ul>
    )
}






/*

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const populateGenreCheckbox = (genres) => {
  const appTitle = 'Movie Suggester';
  const pInitial = "Let's get started...";
  const pGenre = 'What genre(s) are you interested in?';

  const checkboxContainer = document.getElementById('genreCheckbox');

  for (const genre of genres) {
      let option = document.createElement("option");
      option.value = genre.id;
      option.text = genre.name;
      checkboxContainer.appendChild(option);
  }
  return (
    <>
      <h1 className="header">{appTitle}</h1>
      <h2 className="secondaryTitle">{pInitial}</h2>
      <h2>{pGenre}</h2>
      <ul id="genreCheckbox">
         <label>
         <input type="checkbox" id="checkbox" value={genre} />
         {genre}
        </label>
      </ul>

      <ul className="genreOptions">
        <input type="checkbox" id="action" value="action" />
        <label for="action">Action</label>

        <input type="checkbox" id="horror" value="horror" />
        <label for="horror">Horror</label>

        <input type="checkbox" id="romance" value="romance" />
        <label for="romance">Romance</label>

        <input type="checkbox" id="comedy" value="comedy" />
        <label for="comedy">Comedy</label>

        <input type="checkbox" id="animation" value="animation" />
        <label for="animation">Animation</label>

        <input type="checkbox" id="drama" value="drama" />
        <label for="drama">Drama</label>

        <input type="checkbox" id="documentary" value="documentary" />
        <label for="documentary">Documentary</label>
      </ul>
    </>
  )
};

getGenres().then(populateGenreCheckbox);

/*function App() {
  const pInitial = "Let's get started...";
  const pGenre = 'What genre(s) are you interested in?';
  const pTime = 'Do you care when it came out?';
  const pRating = 'Do you care what the people of the internet tend to say about it?';
 
  return (
    <>
      <>
        <h2 className="">{pInitial}</h2>
        <h2>{pGenre}</h2>

        <ul className="genreOptions">
          <input type="checkbox" id="action" value="action" />
          <label for="action">Action</label>

          <input type="checkbox" id="horror" value="horror" />
          <label for="horror">Horror</label>

          <input type="checkbox" id="romance" value="romance" />
          <label for="romance">Romance</label>

          <input type="checkbox" id="comedy" value="comedy" />
          <label for="comedy">Comedy</label>

          <input type="checkbox" id="animation" value="animation" />
          <label for="animation">Animation</label>

          <input type="checkbox" id="drama" value="drama" />
          <label for="drama">Drama</label>

          <input type="checkbox" id="documentary" value="documentary" />
          <label for="documentary">Documentary</label>
        </ul>
      </>

      <>
        <h2>{pTime}</h2>
        <p>Timeline...</p>
        <button>Start Over</button>
        </>
        <>
        <h2>{pRating}</h2>
        <p>Clickable Stars</p>
        <button>Start Over</button>
      </>

      <>
        <h2 className="moveTitle">Movie Output</h2>

        <div className="movieCover">
          <img src="" alt="" />
        </div>

        <div className="movieInfo">
          <p>Star Rating</p>
          <p>Release Date</p>
          <p>Cast:</p>
          <p>Director:</p>
          <p>Description...</p>
          <button>I'm interested</button>
          <br></br>
          <button>Eh, show me another</button>
        </div>
      </>

    </>
  )
}

export default App;
*/