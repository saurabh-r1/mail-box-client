// Compose.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Compose.css";

const Compose = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    const messageContent = editorState.getCurrentContent().getPlainText();
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", messageContent);
  };

  return (
    <div className="container">
      <div className="box">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              placeholder="Enter subject"
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <div className="editor">
              <Editor
              placeholder="Enter your message"
                editorState={editorState}
                onEditorStateChange={handleEditorStateChange}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "fontSize",
                    "fontFamily",
                    "list",
                    "textAlign",
                    "colorPicker",
                    "link",
                    "embedded",
                    "emoji",
                    "image",
                    "remove",
                    "history",
                  ],
                }}
              />
            </div>
          </Form.Group>

          <Button className="button" variant="primary" type="submit" >
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Compose;


