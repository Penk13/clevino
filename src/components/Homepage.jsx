import React, { useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";

const Home = ({ onAdd }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSend = (e) => {
    e.preventDefault();
    // Check if the form is blank or not
    if (!email) {
      alert("Please enter your email");
      return;
    }
    onAdd({ email, message });
    setEmail("");
    setMessage("");
    setShow(false);
    alert("Thankyou for your response!");
  };

  return (
    <Container className="homepage p-5 h-100">
      <h1 className="pt-5">Let's learn how to get </h1>
      <h1 className="quote">freedom & flexibility</h1>
      <a href="#features">
        <Button
          variant="outline-primary link"
          className="my-5 mx-3"
          id="get-started"
        >
          Get Started
        </Button>
      </a>
      <Button
        variant="primary"
        className="my-5"
        id="lets-talk"
        onClick={handleShow}
      >
        Let's Talk!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSend}>
            <Form.Group className="mb-3" controlId="emailField">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textareaField">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message here ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Send
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default Home;
