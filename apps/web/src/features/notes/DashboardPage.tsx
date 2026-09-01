import { Link } from 'react-router-dom';

const sampleNotes = [
  {
    id: 'sample-1',
    title: 'Project kickoff',
    preview: 'Use this screen to find and open your notes.',
    updatedAt: 'Just now',
  },
  {
    id: 'sample-2',
    title: 'Three-day plan',
    preview: 'Build the required flow first, then polish it.',
    updatedAt: 'Today',
  },
];

export const DashboardPage = (): JSX.Element => (
  <section aria-labelledby="notes-heading">
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">Your workspace</p>
        <h1 id="notes-heading">Notes</h1>
      </div>
      <Link className="button" to="/notes/new">
        New note
      </Link>
    </header>

    <label className="search-field" htmlFor="note-search">
      Search notes
      <input id="note-search" name="q" placeholder="Search by title or content" type="search" />
    </label>

    <div className="note-grid" aria-label="Notes list">
      {sampleNotes.map((note) => (
        <Link className="note-card" key={note.id} to={`/notes/${note.id}`}>
          <h2>{note.title}</h2>
          <p>{note.preview}</p>
          <span>Updated {note.updatedAt}</span>
        </Link>
      ))}
    </div>
  </section>
);
