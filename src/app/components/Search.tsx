"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {};
const Search = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="bg-white p-2 w-[260px] text-xl rounded-xl text-black sm:w-80 outline-none"
      />
    </form>
  );
};
export default Search;
