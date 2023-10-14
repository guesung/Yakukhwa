import Icon from '@/components/Icon';
import Image from 'next/image';

export default function LinkSection() {
  return (
    <section className="flex items-center bg-green px-30 mobile:flex-col mobile:gap-10 mobile:py-10 pc:py-15">
      <p className="grow text-subtitle1 text-white">Wallchul Mountain Chrysanthemum Festival</p>
      <div className="flex w-200 justify-center gap-10">
        <Icon id="facebook" width={32} height={32} />
        <Image src="/images/blog.png" width={32} height={32} alt="blog" />
        <Icon id="youtube" width={32} height={32} />
        <Icon id="instagram" width={32} height={32} />
      </div>
    </section>
  );
}
