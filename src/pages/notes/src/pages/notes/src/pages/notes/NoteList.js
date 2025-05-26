import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axiosReq
      .get("/notes/")
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  return (
    <div>
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoteList;
