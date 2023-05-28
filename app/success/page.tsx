import Image from "next/image";
import SuccessMessageCard from "../components/SuccessMessageCard";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex justify-center items-center h-screen">
      <SuccessMessageCard email={searchParams?.email} />
    </main>
  );
}
