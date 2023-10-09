interface PageProps {
  params: {
    id: string;
  };
}
export default function page({ params: { id } }: PageProps) {
  return <div>{id}페이지</div>;
}
