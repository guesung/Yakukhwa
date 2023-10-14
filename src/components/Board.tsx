'use client';
import { Posting } from '@/app/type';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteData } from '@/utils/firebaseController';
import { getClientIsAdmin } from '@/utils/userController';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BoardProps {
  list: Posting[];
}

export default function Board({ list }: BoardProps) {
  const pathname = usePathname();
  const isAdmin = getClientIsAdmin();
  const handleDelete = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData('announcement', id);
      alert('삭제되었습니다.');
    }
  };

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
            <TableRow key={item.id} className="relative h-50 text-center">
              <TableCell className="shrink">{index + 1}</TableCell>
              <TableCell className="px-20 text-left">
                <Link href={`${pathname}/${item.id}`}>{item.title}</Link>
              </TableCell>
              <TableCell className="w-40">{item.date}</TableCell>
              {isAdmin && (
                <td
                  className="absolute inset-y-0 right-0 my-auto flex w-30 cursor-pointer items-center"
                  onClick={() => handleDelete(item.id)}
                >
                  삭제
                </td>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
