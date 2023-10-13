import { Posting } from "@/app/type";
import Spacing from "./Spacing";

interface PostingProps {
  data: Posting;
}
export default function Posting({ data }: PostingProps) {
  return (
    <section className="px-50">
      <Spacing size={30} />
      <p className="text-title1">{data.title}</p>
      <p className="py-30 text-subtitle2">{data.date} </p>
      <hr />
      <div className="py-30 whitespace-pre-wrap text-subtitle1">
        {data.content}
      </div>
    </section>
  );
}
