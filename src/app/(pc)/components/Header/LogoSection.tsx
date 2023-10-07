import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link className="flex justify-center px-20 py-10 items-center" href="/">
      <Image src="/images/main_logo.png" width={200} height={100} alt="로고" />
    </Link>
  );
}
