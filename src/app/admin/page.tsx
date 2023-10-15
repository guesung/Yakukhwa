import Link from 'next/link';
import Login from './components/Login';

export default function page() {
  return (
    <main className="px-50">
      <Login />
      <Link href="/admin/write?category=main-image">1. 메인 이미지 등록하러 가기</Link>
      <Link href="/admin/write?category=schedule">2. 일정 등록하러 가기</Link>
    </main>
  );
}
