// SentMail.js

import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
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
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default SentMail;
