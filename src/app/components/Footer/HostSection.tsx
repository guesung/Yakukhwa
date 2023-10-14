import { getDevice } from '@/utils/getdevice';
import Image from 'next/image';

export default function HostSection() {
  const device = getDevice();
  return (
    <section className="flex h-240 text-center mobile:flex-col mobile:items-center">
      <article className="relativ flex w-300 items-center justify-center mobile:h-100">
        <Image
          src="/images/main_logo.png"
          alt="logo"
          width={device === 'mobile' ? 100 : 200}
          height={100}
        />
      </article>
      <article className="flex flex-col justify-center">
        <div className="flex flex-col gap-10">
          <p className="text-start text-subtitle1">주최</p>
          <Image
            src="/images/host.png"
            alt="주최"
            width={device === 'mobile' ? 80 : 100}
            height={100}
          />
        </div>
        <div className="mt-20 text-caption text-gray-7 pc:text-start">
          Copyright©영암월출산국화축제. All right Reserved.
        </div>
      </article>
    </section>
  );
}
