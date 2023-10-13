"use client";
import { Posting } from "@/app/type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BoardProps {
  list: Posting[];
}

export default function Board({ list }: BoardProps) {
  const pathname = usePathname();
  return (
    <section className="px-50">
      <Table>
        <TableHeader className="h-50 text-center">
          <TableRow>
            <TableHead className="w-60">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-150">날짜</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {list.map((item, index) => (
            <TableRow key={item.id} className="h-50 text-center">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="text-left">
                <Link href={`${pathname}/${item.id}`}>{item.title}</Link>
              </TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
