import Image from 'next/image';

export default function page() {
  return (
    <Image
      src="/images/history.png"
      alt="history"
      width={1000}
      height={1400}
      className="mx-auto my-80"
    />
  );
}
