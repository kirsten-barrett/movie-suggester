const tmdbKey = '87145707317c9c43dde360d5b1e8dffb';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const getGenres = async () => {
    const genreEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres; //array of genre objects from tmdb
            return genres;
        }
    } catch (err) {
        console.log(err);
    }
}

/*
const createGenreCheckboxes = async (genres) => {
    for (const genre of genres) {
        const genreDiv = document.getElementById('genreDiv');

        // create checkbox & assign attributes
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = await genre.name;
        checkbox.value = await genre.name;
        checkbox.id = await genre.name;
        checkbox.className = "checkbox";

        // create labels & assign "for"
        const label = document.createElement('label'); 
        label.htmlFor = checkbox.id; 
    
        label.appendChild(document.createTextNode(checkbox.name));
        genreDiv.appendChild(checkbox);
        genreDiv.appendChild(label);
    }
}
*/

// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

getGenres().then(populateGenreDropdown);

const getSelectedGenre = () => {
    const selectedGenre = document.getElementsByClassName('genres').value;
    return selectedGenre;
};
console.log(getSelectedGenre());


export default function ChooseGenre() {
    const pInitial = "Let's get started...";
    const pGenre = 'What genre(s) are you interested in?';
    /*
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
    */
    return (
        <>
          
        </>
    )
  }
