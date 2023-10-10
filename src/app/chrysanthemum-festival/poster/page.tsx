import Image from "next/image";

export default function page() {
  return (
    <main className="flex justify-center py-50">
      <Image
        src="/images/poster_2023.jpeg"
        width={1000}
        height={100}
        alt="poster"
      />
    </main>
  );
}
