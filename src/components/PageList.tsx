"use client";
import { cn } from "@/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface PageListProps {
  maxPage: number;
  currentPage: number;
  className?: string;
}
export default function PageList({
  maxPage,
  currentPage,
  className,
}: PageListProps) {
  const pageList = Array.from({ length: maxPage }, (_, i) => i + 1);
  const pathname = usePathname();
  const basePathname = pathname.split("/").slice(0, -1).join("/");

  return (
    <section className={cn("flex justify-center", className)}>
      {pageList.map((page) => (
        <Link
          key={page}
          className={cn("w-20 flex justify-center items-center", {
            "border border-blue-200 text-blue-200": page === currentPage,
          })}
          href={`${basePathname}/${page}`}
        >
          {page}
        </Link>
      ))}
    </section>
  );
}
