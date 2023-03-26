import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Header from "./Header";

function AddRoom(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Room!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Complete the form to create room.</p>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          ></Form.Group>

          <Row className="g-2">
            <Col md>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Tochal Molayi" autoFocus />
            </Col>
            <Col md>
              <Form.Label>Categories</Form.Label>

              <Form.Select aria-label="Floating label select example">
                <option>Open to select</option>
                <option value="1">Art</option>
                <option value="2">Educational</option>
                <option value="3">Sports</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Form.Check
            inline
            label="Public"
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Private"
            name="group1"
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            disabled
            label="SuperRoom"
            type={"radio"}
            id={`inline-radio-3`}
          />
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Add Room
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// function MyVerticallyCenteredModal() {
//   const [modalShow, setModalShow] = React.useState(false);
  
//   return (
//     <div className="App">
//       <Header/>
//       <header className="App-header">
//         <p>
//           Click To add your event
//         </p>

//         {/* START mine part -----> */}
//         {/* const [modalShow, setModalShow] = React.useState(false); */}
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Add Event
//         </Button>

//         <AddRoom
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//         {/* END OF mine part -----> */}
//       </header>
//     </div>
//   );
// }

export default AddRoom;
