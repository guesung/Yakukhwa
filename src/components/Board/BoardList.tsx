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
import { useGetPath } from '@/hooks';
import { deleteData } from '@/utils/firebaseController';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface BoardListProps {
  boardList: Posting[];
  isAdmin: boolean;
}

export default function BoardList({ boardList, isAdmin }: BoardListProps) {
  return (
    <section className="pc:px-50">
      <Table>
        <TableHeader className="h-50 text-center">
          <TableRow>
            <TableHead className="w-60">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-150">날짜</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {boardList.map((board, index) => (
            <BoardItem board={board} key={board.id} isAdmin={isAdmin} index={index} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

interface BoardItemProps {
  board: Posting;
  isAdmin: boolean;
  index: number;
}

function BoardItem({ board, isAdmin, index }: BoardItemProps) {
  const { id, title, date } = board;
  const { subTitle } = useGetPath();
  const router = useRouter();
  const handleDelete = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData(subTitle, id);
      alert('삭제되었습니다.');
      router.refresh();
    }
  };
  const pathname = usePathname();

  return (
    <TableRow key={id} className="relative h-50 text-center">
      <TableCell className="shrink">{index + 1}</TableCell>
      <TableCell className="px-20 text-left">
        <Link href={`${pathname}/${id}`}>{title}</Link>
      </TableCell>
      <TableCell className="w-40">{date}</TableCell>
      {isAdmin && (
        <td
          className="inset-y-0 my-auto flex h-40 w-30 cursor-pointer items-center"
          onClick={() => handleDelete(id)}
        >
          삭제
        </td>
      )}
    </TableRow>
  );
}
