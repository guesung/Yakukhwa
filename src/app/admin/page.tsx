import Link from 'next/link';
import Login from './components/Login';

export default function page() {
  return (
    <main>
      <Login />
      <Link href="/admin/write?category=main-image">메인 이미지</Link>
    </main>
  );
}
