import { getDevice } from "@/utils/getdevice";
import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  const device = getDevice();
  return (
    <Link
      className="flex pc:justify-center mobile:justify-start px-20 py-20 items-center "
      href="/"
    >
      <Image
        src="/images/main_logo.png"
        width={device === "mobile" ? 150 : 200}
        height={100}
        alt="로고"
      />
    </Link>
  );
}
