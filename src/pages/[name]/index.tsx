import Client, { getData } from "@/apollo/Client";
import DetailsCard from "@/components/DetailsCard";
import { Context, Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface props {
  pokemonData: Pokemon;
}

const DetailsPage = ({ pokemonData }: props) => {
  return (
    <section className="lg:container mx-auto lg:px-8 sm:px-4 my-20 w-full">
      <DetailsCard pokemonData={pokemonData} />
    </section>
  );
};

export default DetailsPage;

export async function getStaticPaths() {
  const { data } = await getData;
  const allPaths = data.pokemons.map(({ name }: Pokemon) => {
    return {
      params: {
        name: name.toLowerCase(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: Context) {
  const { data } = await getData;
  const name = context.params.name;
  const pokemonData = data.pokemons.find(
    (pokemon: Pokemon) => pokemon.name.toLowerCase() === name
  );

  return {
    props: {
      pokemonData,
    },
  };
}
