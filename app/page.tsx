import dynamic from "next/dynamic";

const NotesClient = dynamic(() => import("./notes/Notes.client"), {
  ssr: false,
});

export default function NotesPage() {
  return <NotesClient />;
}
