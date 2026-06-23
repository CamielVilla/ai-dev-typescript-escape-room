// 👑 KAMER 8: Boss Room
// Combine EVERYTHING: Interfaces, Unions, Aliases, Functions, Optionals!
// Fix all errors to escape!

// TODO: Define union type for movie genres ("action" | "drama" | "sci-fi" | "comedy" | "horror")
type Genre = "action" | "drama" | "sci-fi" | "comedy" | "horror";

// TODO: Define union type for ratings (only 1 | 2 | 3 | 4 | 5)
type Rating = 1 | 2 | 3 | 4 | 5;

// TODO: Define union type for movie status ("in_development" | "released" | "cancelled")
type MovieStatus = "in_development" | "released" | "cancelled";

// TODO: Create a Director interface (id: number, name: string, films: string[])
interface Director {
  id: number;
  name: string;
  films: string[];
}

// TODO: Create a MovieReview interface (id: number, reviewer: string, rating: Rating, comment: string, optional: date)
interface MovieReview {
  id: number;
  reviewer: string;
  rating: Rating;
  comment: string;
  date?: string;
}

// TODO: Create a complete Movie interface with all required and optional properties
interface Movie {
  id: number;
  title: string;
  genre: Genre;
  releaseYear: number;
  director: Director;
  status: MovieStatus;
  imdbScore?: number;
  reviews?: MovieReview[];
  budget?: number;
}

// TODO: Create a MovieLibrary type alias { movies: Movie[], totalCount: number, lastUpdated?: string }
type MovieLibrary = {
  movies: Movie[];
  totalCount: number;
  lastUpdated?: string;
};

// These objects are used but types are missing
const spielberg: Director = {
  id: 1,
  name: "Steven Spielberg",
  films: ["movie_1", "movie_2"],
};

const nolan: Director = {
  id: 2,
  name: "Christopher Nolan",
  films: ["movie_3", "movie_4", "movie_5"],
};

const review1: MovieReview = {
  id: 1,
  reviewer: "John Doe",
  rating: 5,
  comment: "Absolutely mind-bending!",
  date: "2024-01-15",
};

const review2: MovieReview = {
  id: 2,
  reviewer: "Jane Smith",
  rating: 4,
  comment: "Great cinematography",
};

// ERROR: These movies have invalid property values - fix them!
// "mysterious" is not a valid Genre, "complete" is not a valid MovieStatus, rating should be 1-5
const movie1: Movie = {
  id: 1,
  title: "Inception",
  genre: "mysterious",
  releaseYear: 2010,
  director: nolan,
  status: "released",
  imdbScore: 8.8,
  reviews: [review1, review2],
};

const movie2: Movie = {
  id: 2,
  title: "E.T.",
  genre: "sci-fi",
  releaseYear: 1982,
  director: spielberg,
  status: "complete",
  reviews: [review1],
};

// TODO: Add proper types for parameters and return type
function filterMovies(movies: Movie[], predicate: (m: Movie) => boolean): Movie[] {
  return movies.filter(predicate);
}

// TODO: Add proper types for parameters and return type
function calculateAverageScore(movies: Movie[]): number {
  const scores = movies
    .filter((m: Movie) => m.imdbScore !== undefined)
    .map((m: Movie) => m.imdbScore);

  if (scores.length === 0) return 0;
  const total = scores.reduce((acc: number, score: number | undefined) => acc + (score || 0), 0);
  return total / scores.length;
}

// TODO: Add proper types for parameters and return type
function generateReport(library: MovieLibrary): string {
  return (
    `Movies in library: ${library.movies.length}\n` +
    `Total: ${library.totalCount}\n` +
    `Last updated: ${library.lastUpdated || "unknown"}`
  );
}

// TODO: Add proper types for parameters and return type
function findMoviesByDirector(movies: Movie[], director: Director): Movie[] {
  return movies.filter((m) => m.director.id === director.id);
}

// TODO: Add proper types for parameters and return type
function isHighQualityRelease(movie: Movie): boolean {
  return (
    movie.status === "released" &&
    movie.imdbScore !== undefined &&
    movie.imdbScore >= 7
  );
}

// Test the functions
const allMovies: Movie[] = [movie1, movie2];
const library: MovieLibrary = {
  movies: allMovies,
  totalCount: allMovies.length,
  lastUpdated: "2024-02-27",
};

const nolansFilms = findMoviesByDirector(allMovies, nolan);
const avgScore = calculateAverageScore(allMovies);
const releaseReport = generateReport(library);
const qualityReleases = filterMovies(allMovies, isHighQualityRelease);

console.log(`\n👑 Room 8: BOSS LEVEL - Complete Movie System!`);
console.log(`Nolan's films: ${nolansFilms.length}`);
console.log(`Average IMDB score: ${avgScore.toFixed(1)}`);
console.log(`Quality releases: ${qualityReleases.length}`);
console.log(`\nLibrary Report:\n${releaseReport}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(spielberg.name.charCodeAt(0) - 15),
  String.fromCharCode(nolan.films.length + 76),
  String.fromCharCode(review1.rating + 72),
  String.fromCharCode(allMovies.length + 31),
].join("");
