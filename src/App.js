import { useState } from "react";
import "./App.css";
import { Color } from "./Color";
import { Movie } from "./Movie";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { TicTacToe } from "./TicTacToe";
import { useEffect } from "react";
import { BasicForm } from "./BasicForm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { API } from "./global";

function App() {
  const navigate = useNavigate();
  const INITIAL_MOVIE_LIST = [
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      id: "101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      id: "102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      id: "103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleModeChange = () => {
    setMode(mode == "light" ? "dark" : "light");
  };

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>
              <Button color="inherit" onClick={() => navigate("/Movie-List")}>
                Movie List
              </Button>
              <Button color="inherit" onClick={() => navigate("/Add-movie")}>
                Add Movie
              </Button>
              {/* <Button color="inherit" onClick={() => navigate("/tictactoe")}>
                Tic Tac Toe
              </Button>
              <Button color="inherit" onClick={() => navigate("/basicForm")}>
                Basic Form
              </Button> */}
              <Button
                color="inherit"
                onClick={() => setMode(mode == "light" ? "dark" : "light")}
                startIcon={
                  mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode == "dark" ? "light" : "dark"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="color-game" element={<Color />} />
            <Route
              path="Movie-List"
              element={
                <Movielist movieList={movieList} setMovieList={setMovieList} />
              }
            />
            <Route path="MovieInfo/:id" element={<MovieInfo />} />
            <Route path="404" element={<NotFound />}></Route>

            <Route
              path="films"
              element={<Navigate replace to="Movie-List" />}
            ></Route>

            <Route path="*" element={<Navigate replace to="404" />}>
              {" "}
            </Route>
            <Route path="movies/edit/:id" element={<EditMovie />} />
            <Route path="tictactoe" element={<TicTacToe />}></Route>
            <Route path="basicForm" element={<BasicForm />}></Route>
            <Route path="/Add-movie" element={<AddMovie />}></Route>
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

function Home() {
  return <h1>Welcome to the home page of multiple games</h1>;
}

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function Movielist() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const getMovie = () => {
    fetch(`${API}/Movies`)
      .then((data) => data.json())
      .then((mv) => setMovieList(mv));
  };

  useEffect(() => getMovie(), []);

  const handleDelete = (id) => {
    fetch(`${API}/Movies/${id}`, {
      method: "DELETE",
    }).then((data) => {
      getMovie();
    });
  };

  return (
    <>
      <div className="movieList">
        {movieList.map((movie) => (
          <Movie
            key={movie._id}
            movie={movie}
            id={movie._id}
            deleteButton={
              <IconButton
                aria-label="Example"
                onClick={() => {
                  handleDelete(movie._id);
                }}
              >
                <DeleteForeverIcon
                  sx={{
                    color: "#ffcc00",
                  }}
                />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="Example"
                onClick={() => {
                  navigate(`/movies/edit/${movie._id}`);
                }}
              >
                <EditIcon
                  sx={{
                    color: "#ffcc00",
                  }}
                />
              </IconButton>
            }
          />
        ))}
      </div>
    </>
  );
}

function AddMovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  const handleAddMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    fetch(`${API}/addSingleMovie`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => navigate("/Movie-List"));
  };

  return (
    <Card className="movieDetails">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />

      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="outlined" onClick={handleAddMovie}>
        Add Movie
      </Button>
    </Card>
  );
}

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    console.log("id here is ", id);
    fetch(`${API}/Movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  // const movieArr = movieList.filter((movie) => movie.id == id);
  // const movie = movieArr[0];
  const navigate = useNavigate();
  return (
    <div className="MovieInfo">
      <iframe
        width="795"
        height="596"
        src={movie.trailer}
        title="Remy Cooks Ratatouille"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movieRating">
        <h4>{movie.name}</h4>
        <div>&#11088; {movie.rating} </div>
      </div>
      <p className="summary">{movie.summary}</p>

      <Button
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </div>
  );
}

function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`${API}/Movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();

  const handleEditMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    fetch(`${API}/Movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      navigate("/Movie-List");
    });
  };
  return (
    <Card className="movieDetails">
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={rating}
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={poster}
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />

      <TextField
        value={summary}
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        value={trailer}
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="outlined" onClick={handleEditMovie}>
        Save Movie
      </Button>
    </Card>
  );
}
