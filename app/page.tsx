import Image from "next/image";
import NewsLetterCard from "./components/NewsLetterCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <NewsLetterCard />
    </main>
  );
}
