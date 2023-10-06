import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="h-100 flex justify-center items-center">
      <Image src="/images/logo.png" width={200} height={100} alt="로고" />
    </div>
  );
}
