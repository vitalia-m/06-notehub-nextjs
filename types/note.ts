export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoteFormData {
  title: string;
  content: string;
  tag: "Work" | "Todo" | "Personal" | "Meeting" | "Shopping";
}
