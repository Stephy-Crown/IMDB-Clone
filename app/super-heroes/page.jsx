"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        const fetchedData = res.data;
        setFetchData(fetchedData);
        // console.log(setData(res.data));
        setIsLoading(false);
      })
      .catch((error) => {
        setError("something went wrong", error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">SuperHeroes page</h1>
      {fetchData.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
}
