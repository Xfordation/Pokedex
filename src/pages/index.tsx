import { getData, queryStructure } from "@/apollo/Client";
import Cards from "@/components/Cards";
import { Pokemon } from "@/types/types";
import React from "react";

import { useQuery, gql, ApolloError } from "@apollo/client";
import Client from "@/apollo/Client";
import Head from "next/head";

const POKEMONS_QUERY = gql`
  ${queryStructure}
`;

interface Props {
  data: Data;
}

interface Data {
  pokemons: Pokemon[];
}

const ITEMS_PER_PAGE = 20;

const HomePage = ({ data }: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const totalPages = Math.ceil(data.pokemons.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <main>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div className="sm:my-6 md:my-12 md:px-8 sm:px-4 md:container mx-auto grid md:gap-4 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-1 ">
        {data.pokemons
          .slice(startIndex, endIndex)
          .map(({ id, number, name, types, image }) => (
            <Cards
              key={id}
              id={id}
              number={number}
              name={name}
              types={types}
              image={image}
            />
          ))}
      </div>
      <div className="flex justify-around items-center my-4">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="px-4 bg-transparent border rounded-lg border-slate-500 cursor-pointer "
        >
          Prev
        </button>
        <div className="flex items-center justify-evenly gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 bg-transparent border rounded-lg border-slate-500 cursor-pointer ${
                currentPage === index + 1 ? "bg-gray-200" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className="px-4 bg-transparent border rounded-lg border-slate-500 cursor-pointer "
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  const { data } = await Client.query({
    query: POKEMONS_QUERY,
    variables: { first: 60 },
  });
  return {
    props: { data },
  };
}
