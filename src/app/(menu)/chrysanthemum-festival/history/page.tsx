import Image from 'next/image';

export default function page() {
  return (
    <Image
      src="/images/prologue.png"
      alt="프롤로그"
      width={1000}
      height={1400}
      className="mx-auto my-80"
    />
  );
}
