import React, { useState } from "react";
import { Card, Col, Container, Modal, Row, Button } from "react-bootstrap";
import Section from "../../Shared/Section";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const Booking = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Section>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {bookings.map((booking) => (
              <Col key={bookings.id}>
                <Card className="border-0 card-shadow">
                  <Card.Body className="text-center">
                    <h5 className="my-t-primary fw-md">{booking.name}</h5>
                    <h6 className="my-t-dark fw-md">{booking.time}</h6>
                    <small className=" text-muted d-block mb-3">
                      {booking.space} space available
                    </small>
                    <button
                      className="btn btn-primary rounded-0"
                      onClick={handleShow}
                    >
                      Book appointment
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      {/* Modal============= */}

      <Modal show={show} onHide={handleClose}>
        <Card.Body>
          <form></form>
          <Button className="btn-primary" onClick={handleClose}>
            SEND
          </Button>
        </Card.Body>
      </Modal>
    </>
  );
};

export default Booking;
