import { Pokemon } from "@/types/types";
import React from "react";
import Image from "next/image";
import Category from "./Category";
import Evolution from "./Evolution";
import { gql, useQuery } from "@apollo/client";
import Client, { evolutionQueryStructure } from "@/apollo/Client";
import Head from "next/head";

interface Props {
  pokemonData: Pokemon;
}

const DetailsCard = ({ pokemonData }: Props) => {
  const {
    id,
    name,
    number,
    weight,
    height,
    classification,
    types,
    resistant,
    weaknesses,
    fleeRate,
    maxCP,
    maxHP,
    image,
  } = pokemonData;
  const [evolution, setEvolution] = React.useState([]);
  const [showEvolution, setShowEvolution] = React.useState<boolean>(false);

  const getEvolution = async () => {
    const { data } = await Client.query({
      query: evolutionQueryStructure,
      variables: { id, name },
    });
    setEvolution(data.pokemon.evolutions);
    setShowEvolution(true);
  };

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full border-2 border-slate-900 rounded-lg lg:py-8 lg:grid lg:grid-cols-2 sm:grid-cols-1 sm:p-8">
        <div>
          <Image
            src={image}
            width={300}
            height={300}
            alt="name"
            className="mix-blend-multiply"
          />
        </div>
        <div>
          <p className="text-2xl text-gray-500 font-medium">#{number}</p>
          <h1 className="text-6xl font-medium uppercase">{name}</h1>

          <div className="flex items-center gap-2">
            <h4 className="text-xl font-medium">Classification:</h4>
            <span className="text-l text-gray-500 font-normal">
              {classification}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-xl font-medium">Weight:</h4>
            <span className="text-l text-gray-500 font-normal">
              {weight.minimum}-{weight.maximum}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-xl font-medium">Height:</h4>
            <span className="text-l text-gray-500 font-normal">
              {height.minimum}-{height.maximum}
            </span>
          </div>

          <div className="my-4">
            <h3 className="text-2xl">Category:</h3>
            <div className="flex items-center gap-4 lg:flex-nowrap sm:flex-wrap ">
              {types.map((type) => (
                <Category categoryName={type} key={type} />
              ))}
            </div>
          </div>

          <div className="my-4">
            <h3 className="text-2xl">Resistance:</h3>
            <div className="flex items-center gap-4  lg:flex-nowrap sm:flex-wrap">
              {resistant.map((resis) => (
                <Category categoryName={resis} key={resis} />
              ))}
            </div>
          </div>

          <div className="my-4">
            <h3 className="text-2xl">Weakness:</h3>
            <div className="flex items-center gap-4 lg:flex-nowrap sm:flex-wrap">
              {weaknesses.map((weak) => (
                <Category categoryName={weak} key={weak} />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={getEvolution}
            className="bg-slate-800 text-lg text-white border border-slate-800 font-medium py-2 px-6 hover:bg-transparent hover:text-slate-800"
          >
            See Evolution
          </button>
        </div>
        <div className="col-span-2">
          {showEvolution ? <Evolution evolution={evolution} /> : ""}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
