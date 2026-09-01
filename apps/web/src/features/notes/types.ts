export type RichTextDocument = {
  type: 'doc';
  content: ReadonlyArray<unknown>;
};

export type NoteSummary = {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  updatedAt: string;
};

export type Note = NoteSummary & {
  content: RichTextDocument;
};
