import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie, id, deleteButton, editButton }) {
  const styles = { color: movie.rating > 8 ? "green" : "red" };
  const [toggleFlag, setToggleFlag] = useState(true);
  const togglesstyles = {
    display: toggleFlag ? "block" : "none",
  };
  const toggleSummary = () => {
    setToggleFlag(!toggleFlag);
  };

  const navigate = useNavigate();

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <Card className="movie-card">
      <CardContent>
        <img className="poster" src={movie.poster} alt="" />
        <div className="movieRating">
          <div className="name-toggle">
            <h4>{movie.name}</h4>
            <IconButton
              aria-label="Example"
              onClick={() => {
                navigate(`/MovieInfo/${id}`);
              }}
            >
              <InfoIcon
                sx={{
                  color: "#ffcc00",
                }}
              />
            </IconButton>
            <IconButton aria-label="Example" onClick={toggleSummary}>
              {toggleFlag ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#ffcc00",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#ffcc00",
                  }}
                />
              )}
            </IconButton>
          </div>
          <div className="rating" style={styles}>
            &#11088; {movie.rating}{" "}
          </div>
        </div>

        {toggleFlag ? (
          <p style={togglesstyles} className="summary">
            {movie.summary}
          </p>
        ) : null}

        <div className="interaction-panel">
          <IconButton
            onClick={() => {
              setLike(like + 1);
            }}
          >
            <Badge badgeContent={like} color="success">
              <ThumbUpIcon
                sx={{
                  color: "#ffcc00",
                }}
              />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="Example"
            onClick={() => {
              setDisLike(disLike + 1);
            }}
          >
            <Badge badgeContent={disLike} color="warning">
              <ThumbDownIcon
                sx={{
                  color: "#ffcc00",
                }}
              />
            </Badge>
          </IconButton>
          {deleteButton}
          {editButton}
        </div>
      </CardContent>
    </Card>
  );
}
