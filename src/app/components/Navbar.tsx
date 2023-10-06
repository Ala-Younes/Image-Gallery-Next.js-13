import Link from "next/link";
import Search from "./Search";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className="flex flex-col gap-4 items-center p-4 font-bold max-w-6xl mx-auto text-white sm:flex-row sm:justify-between">
        <h1 className="text-2xl text-center whitespace-nowrap sm:text-3xl ">
          <Link href={"/"}> NextJs Image Gallery</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
};
export default Navbar;
