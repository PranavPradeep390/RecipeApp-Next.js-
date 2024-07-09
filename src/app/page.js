import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="text-xl text-red-400">Welcome To Recipe App</h1>
      <Link href={'/recipe-list'}>Explore Recipe App</Link>
    </div>
  );
}
