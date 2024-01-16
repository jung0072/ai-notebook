import { Editor } from "@/components/editor";

export default function DocumentIDPage({ params }: { params: { id: string } }) {
  return <Editor id={params.id} />;
}
