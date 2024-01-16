import { Editor } from "@/components/editor";

export default function Page({ params }: { params: { id: string } }) {
  return <Editor id={params.id} />;
}
