import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dummyData } from "@/constants";
import Link from "next/link";

interface PageProps {
  searchParams: {
    page: string;
  };
}

export default async function page({ searchParams: { page } }: PageProps) {
  return (
    <div className="px-50">
      <Table>
        <TableHeader className="h-50 text-center">
          <TableRow>
            <TableHead className="w-60">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-150">날짜</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dummyData.ANNOUNCEMENT.map((invoice) => (
            <TableRow key={invoice.id} className="h-50 text-center">
              <TableCell>{invoice.id}</TableCell>
              <TableCell className="text-left">
                <Link href={`/festival-news/announcement/${invoice.id}`}>
                  {invoice.title}
                </Link>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableCaption></TableCaption>
      </Table>
    </div>
  );
}
