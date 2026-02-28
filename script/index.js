console.log("index connected");

const fetchData = async () => {
  try {
    const res = await fetch(
      "http://www.omdbapi.com/?s=batman&page=2&apikey=6fb6b825",
    );
    const data = await res.json();
    const movies = data.Search;
    displayMovie(movies);
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

const movieContainer = document.getElementById("movie-container");

function displayMovie(movies) {
  movies.forEach((movie) => {
    const { Poster, Title, Type, Year, imdbId } = movie;
    const movieCard = document.createElement("div");
    movieCard.innerHTML = `
     <div id="movie" class = "shadow-md rounded-md">
           <div class = "w-full h-[400px] overflow-hidden mb-4"> 
           <img src=${Poster} alt="${Title}"  class = "w-full  object-center object-cover rounded-md">
           </div>
           <div class = "px-4">
            <h3 class = "text-2xl font-medium"> Name : ${Title}</h3>
            <p class = "text-2xl">Year : ${Year}</p>
            <p class = "text-2xl"> Type : ${Type}</p>
           <div class = "py-4 ">
            <button class = "text-2xl bg-blue-500 p-2 rounded-md  mx-auto block my-2">Watch Now</button>
            </div>
            </div>

        </div>
 `;
 movieContainer.appendChild(movieCard)
  });
}
