import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link className="flex justify-center items-center" href="/">
      <Image src="/images/logo.png" width={200} height={100} alt="로고" />
    </Link>
  );
}
