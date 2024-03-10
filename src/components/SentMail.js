// SentMail.js

import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import axios from "axios";

const SentMail = () => {
  const [sentEmails, setSentEmails] = useState([]);

  useEffect(() => {
    fetchSentEmails();
  }, []);

  const fetchSentEmails = async () => {
    try {
      const response = await axios.get(
        "https://mail-5f4a0-default-rtdb.firebaseio.com/emails.json"
      );
      const data = response.data;
      const sentEmailList = [];

      for (const key in data) {
        if (data[key].sender === "sender@ifno.com") {
          sentEmailList.push({
            id: key,
            ...data[key],
          });
        }
      }

      setSentEmails(sentEmailList.reverse()); // Reverse to display latest emails first
    } catch (error) {
      console.error("Error fetching sent emails:", error);
    }
  };

  const handleDeleteEmail = async (id) => {
    try {
      await axios.delete(
        `https://mail-5f4a0-default-rtdb.firebaseio.com/emails/${id}.json`
      );

      setSentEmails(sentEmails.filter((email) => email.id !== id));
      console.log("Email deleted successfully");
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Sent Mail</h2>
        <ListGroup>
          {sentEmails.map((email) => (
            <ListGroup.Item key={email.id}>
              <div>
                <strong>To:</strong> {email.receiver}
              </div>
              <div>
                <strong>Subject:</strong> {email.subject}
              </div>
              <div>
                <strong>Message:</strong> {email.message}
              </div>
              <div>
                <strong>Sent:</strong>{" "}
                {new Date(email.timestamp).toLocaleString()}
              </div>
              <Button
                variant="danger"
                onClick={() => handleDeleteEmail(email.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default SentMail;
