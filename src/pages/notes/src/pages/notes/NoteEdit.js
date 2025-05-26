import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function NoteEdit() {
  const { id } = useParams();
  const history = useHistory();

  const [noteData, setNoteData] = useState({ content: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await axiosReq.get(`/notes/${id}/`);
        setNoteData({ content: data.content });
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [id]);

  const handleChange = (event) => {
    setNoteData({
      ...noteData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.put(`/notes/${id}/`, { content: noteData.content });
      history.push(`/notes/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Edit Note</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={noteData.content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}
      <Button type="submit">Save Changes</Button>
    </Form>
  );
}

export default NoteEdit;
