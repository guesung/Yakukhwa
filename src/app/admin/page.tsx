import Link from 'next/link';
import Login from './components/Login';
import Button from '@/components/Button';

export default function page() {
  return (
    <main className="flex h-300 w-full flex-col items-center justify-center gap-20 px-50">
      <Login />
      <Button>
        <Link href="/admin/write?category=main-image">메인 이미지 등록하러 가기</Link>
      </Button>
    </main>
  );
}
