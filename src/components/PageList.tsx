'use client';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PageListProps {
  maxPage: number;
  currentPage: number;
  className?: string;
}
export default function PageList({ maxPage, currentPage, className }: PageListProps) {
  const pageList = Array.from({ length: maxPage }, (_, i) => i + 1);
  const pathname = usePathname();
  const basePathname = pathname.replace(/\?.*$/, '');

  return (
    <section className={cn('flex justify-center py-30', className)}>
      {pageList.map((page) => (
        <Link
          key={page}
          className={cn('flex w-30 items-center justify-center hover:text-brand-2', {
            'border border-brand-2 text-brand-2': page === currentPage,
          })}
          href={`${basePathname}?page=${page}`}
        >
          {page}
        </Link>
      ))}
    </section>
  );
}
