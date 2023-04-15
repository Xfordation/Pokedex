import Image from "next/image";
import React from "react";
import Category from "./Category";
import { Pokemon } from "@/types/types";

interface Props {
  evolution: Pokemon[];
}

const Evolution = ({ evolution }: Props) => {
  console.log(evolution);
  return (
    <>
      {!evolution ? (
        <p className="text-red-600 text-xl text-center p-4">
          No Evolution After this Stage
        </p>
      ) : (
        <div className="flex items-center justify-center w-full">
          {evolution.map(({ image, name, id, types }) => (
            <section className="w-full">
              <div className="relative w-full h-40" key={id}>
                <Image
                  fill
                  src={image}
                  alt="name"
                  className="object-contain w-full"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h4 className="text-xl font-semibold">{name}</h4>

                <div className="flex gap-2 items-center text-sm w-full justify-center">
                  <Category categoryName={types[0]} />
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
};
export default Evolution;
