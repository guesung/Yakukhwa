import Image from "next/image";

export default function HostSection() {
  return (
    <section className="h-240 flex mobile:flex-col mobile:items-center text-center">
      <article className="w-300 h-150 flex justify-center items-center relative">
        <Image
          src="/images/main_logo.png"
          alt="logo"
          width={200}
          height={100}
        />
      </article>
      <article className="flex flex-col justify-center">
        <div className="flex">
          {["주최", "주관", "후원"].map((title) => (
            <div
              key={title}
              className="w-150 flex justify-center h-50 items-center bg-brand-2"
            >
              {title}
            </div>
          ))}
        </div>
        <div className="text-caption ml-20 mt-20 text-gray-7 pc:text-start">
          Copyright©영암월출산국화축제. All right Reserved.
        </div>
      </article>
    </section>
  );
}
