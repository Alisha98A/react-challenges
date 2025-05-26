import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await axiosReq.get(`/notes/${id}/`);
        setNote(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [id]);

  return (
    <div>
      {note ? (
        <>
          <h3>Note Detail</h3>
          <p>{note.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NoteDetail;
