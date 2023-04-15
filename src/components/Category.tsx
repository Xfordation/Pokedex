import React from "react";

interface Props {
  categoryName: string;
}

const Category = ({ categoryName }: Props) => {
  const setCategoryColor = () => {
    if (categoryName === "Fire") return "bg-orange-600";
    if (categoryName === "Normal") return "bg-slate-600";
    if (categoryName === "Electric") return "bg-yellow-400";
    if (categoryName === "Fairy") return "bg-pink-400";
    if (categoryName === "Fighting") return "bg-red-700";
    if (categoryName === "Flying") return "bg-indigo-600";
    if (categoryName === "Grass") return "bg-green-600";
    if (categoryName === "Poison") return "bg-purple-600";
    if (categoryName === "Bug") return "bg-emerald-500";
    if (categoryName === "Water") return "bg-blue-500";
    if (categoryName === "Ground") return "bg-yellow-800";
    if (categoryName === "Ice") return "bg-cyan-500";
    if (categoryName === "Steel") return "bg-gray-600";
    if (categoryName === "Psychic") return "bg-fuchsia-600";
    if (categoryName === "Rock") return "bg-yellow-950";
    if (categoryName === "Ghost") return "bg-stone-950";
  };
  return (
    <p
      className={`category py-0 px-4 ${setCategoryColor()} border-none rounded-full text-white text-center`}
    >
      {categoryName}
    </p>
  );
};

export default Category;
