"use client";

import React from "react";

import axios from "axios";

import { useQuery } from "@tanstack/react-query";
export default function RQSuperHeroesPage() {
  // This data refers to the entire API response

  // const { isLoading, isError, data } = useQuery("super-heroes", () =>
  //   axios
  //     .get("http://localhost:4000/superheroes")
  //     .then((response) => response.data)
  // );

  const fetchHeroesData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data } = useQuery(["super-heroes"], fetchHeroesData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!data) {
    return <h2>No data available</h2>;
  }
  return (
    <div>
      <h2>RQSuperHeroes Page</h2>
      {
        // To access data from the response, we use data?.data.. "?" this optional chaining so that JSX doesn't throw an error if data doesn't exist
        data?.data.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))
      }
    </div>
  );
}
