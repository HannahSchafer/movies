import React from "react";
import { Movie as IMovie } from "../../types";
import Movie from "../Movie";
import "./styles.css";
import { Carousel } from "@mantine/carousel";

const posterPath = "https://image.tmdb.org/t/p/w500/";

type Props = {
  list?: IMovie[];
};

const MovieCarousel: React.FC<Props> = ({ list }) =>
  list ? (
    <Carousel
      classNames={{
        slide: "slide",
        viewport: "viewport",
      }}
      withIndicators
      height={200}
      slideSize={{ base: "100%", sm: "10%", md: "15%" }}
      slideGap="sm"
      align="start"
      loop
    >
      {list.map((movie, index) => (
        <Carousel.Slide key={index}>
          <Movie movie={movie} />
        </Carousel.Slide>
      ))}
    </Carousel>
  ) : null;

export default MovieCarousel;
