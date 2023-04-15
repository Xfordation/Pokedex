import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Category from "./Category";

interface Props {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
}

const Cards = ({ id, number, name, types, image }: Props) => {
  const colorPallet = ["#f5ffcb", "#ffe3b0"];
  const router = useRouter();
  return (
    <article
      className="dark:border-slate-950 border-2 hover:opacity-80 self-center justify-self-center p-7 items-center justify-between flex flex-col gap-4 md:w-full h-full rounded-lg cursor-pointer sm:w-9/12"
      style={{
        backgroundColor: `${
          colorPallet[Math.floor(Math.random() * colorPallet.length)]
        }`,
      }}
      onClick={() => router.push(`/${name.toLowerCase()}`)}
    >
      <div className="relative w-full h-40 ">
        <Image
          fill
          sizes="100%"
          loading="eager"
          src={image}
          alt={name}
          className="object-contain w-full mix-blend-multiply"
        />
      </div>
      <div className="w-full">
        <p className="text-gray-500 text-sm font-normal">#{number}</p>

        <h4 className="text-xl font-semibold">{name}</h4>
      </div>
      <div className="flex gap-2 items-center text-sm w-full">
        {types.map((type, index) => (
          <Category categoryName={type} key={index} />
        ))}
      </div>
    </article>
  );
};

export default Cards;
