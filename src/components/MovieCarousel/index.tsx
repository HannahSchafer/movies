import React from "react";
import { Movie } from "../../types";
import "./styles.css";
import { Carousel } from "@mantine/carousel";

const posterPath = "https://image.tmdb.org/t/p/w500/";

type Props = {
  list?: Movie[];
};

const MovieCarousel: React.FC<Props> = ({ list }) =>
  list ? (
    <Carousel
      classNames={{
        root: "root",
        slide: "slide",
        container: "container",
        viewport: "viewport",
      }}
      withIndicators
      height={200}
      slideSize={{ base: "100%", sm: "10%", md: "15%" }}
      slideGap="sm"
      align="start"
      loop
    >
      {list.map((movie) => (
        <Carousel.Slide key={movie.id}>
          <img
            src={`${posterPath}${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  ) : null;

export default MovieCarousel;
