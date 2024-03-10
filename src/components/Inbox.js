// Inbox.js

import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

const Inbox = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get(
        "https://mail-5f4a0-default-rtdb.firebaseio.com/emails.json"
      );
      const data = response.data;
      const emailList = [];

      for (const key in data) {
        emailList.push({
          id: key,
          ...data[key],
        });
      }

      setEmails(emailList.reverse()); // Reverse to display latest emails first
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Inbox</h2>
        <ListGroup>
          {emails.map((email) => (
            <ListGroup.Item key={email.id}>
              <div>
                <strong>From:</strong> {email.sender}
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

export default Inbox;
