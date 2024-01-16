import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const documents = [
  {
    id: "1",
    title: "untitled",
    date: "2023-01-16",
  },
];

export default function DocumentPage() {
  return (
    <Table>
      <TableCaption>A list of your documents.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document) => (
          <TableRow key={document.id}>
            <TableCell className="font-medium">{document.id}</TableCell>
            <TableCell>
              <Link href={`/documents/${document.id}`}>{document.title} </Link>
            </TableCell>
            <TableCell>{document.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Document</TableCell>
          <TableCell className="text-right">{documents.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
