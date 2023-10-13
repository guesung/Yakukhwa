import Form from "./components/Form";

interface PageProps {
  searchParams: {
    category: string;
  };
}

export default async function page({ searchParams: { category } }: PageProps) {
  return (
    <div>
      <Form category={category} />
    </div>
  );
}
