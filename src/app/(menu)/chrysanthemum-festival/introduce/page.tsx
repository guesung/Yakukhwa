import NoContent from '@/components/NoContent';
import Image from 'next/image';

export default function page() {
  return (
    <main>
      <Image
        src="/images/introduce_1.png"
        alt="축제소개"
        width={1000}
        height={1000}
        className="mx-auto"
      />
      <Image
        src="/images/introduce_2.png"
        alt="축제소개"
        width={1000}
        height={1000}
        className="mx-auto"
      />
    </main>
  );
}
