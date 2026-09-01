import { Link, useParams } from 'react-router-dom';

export const NoteEditorPage = (): JSX.Element => {
  const { noteId } = useParams<{ noteId: string }>();
  const isNewNote = noteId === undefined;

  return (
    <section aria-labelledby="editor-heading">
      <Link className="back-link" to="/notes">
        ← Back to notes
      </Link>
      <p className="eyebrow">{isNewNote ? 'Create' : 'Edit'}</p>
      <h1 id="editor-heading">{isNewNote ? 'New note' : 'Edit note'}</h1>
      <div className="editor-placeholder">
        The TipTap rich-text editor, autosave state, and destructive-action confirmation belong in
        the notes UI slice.
      </div>
    </section>
  );
};
