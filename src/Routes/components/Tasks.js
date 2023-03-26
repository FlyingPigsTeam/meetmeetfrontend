import React from "react";
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
} from "mdb-react-ui-kit";



export default function Task() {
    return (
        <section className="p-5 vh-100" style={{ backgroundColor: "#3da2c3" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="8" xl="6">
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h5>
                                    <span className="h2 me-2">Team Meeting</span>{" "}
                                    <MDBBadge className="mx-2" color="danger">
                                        checklist
                                    </MDBBadge>
                                </h5>
                                <p className="text-muted pb-2">04/01/2020 • ML - 1321</p>
                                <MDBListGroup className="rounded-0">
                                    <MDBListGroupItem className="border-0 d-flex align-items-center ps-0">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheckChecked"
                                            className="me-3"
                                            defaultChecked
                                        />
                                        <s>Task list and assignments</s>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center ps-0">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheck"
                                            className="me-3"
                                        />
                                        Set due date and assignments
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center ps-0">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheck"
                                            className="me-3"
                                        />
                                        Remove duplicate tasks and stories
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center ps-0">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheck"
                                            className="me-3"
                                        />
                                        Update the userflow and stories
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center ps-0">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheck"
                                            className="me-3"
                                        />
                                        Adjust the components
                                    </MDBListGroupItem>
                                </MDBListGroup>
                                <div className="divider d-flex align-items-center my-4">
                                    <p
                                        className="text-center mx-3 mb-0"
                                        style={{ color: "#a2aab7" }}
                                    >
                                        Shared with
                                    </p>
                                </div>
                                <MDBListGroup
                                    horizontal
                                    className="rounded-0 justify-content-center pb-2"
                                >
                                    <MDBListGroupItem className="border-0 d-flex align-items-center p-0">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                            alt="avatar"
                                            className="rounded-circle me-n2"
                                            width="45"
                                        />
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center p-0">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                            alt="avatar"
                                            className="rounded-circle me-n2"
                                            width="45"
                                        />
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center p-0">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                            alt="avatar"
                                            className="rounded-circle me-n2"
                                            width="45"
                                        />
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="border-0 d-flex align-items-center p-0">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                            alt="avatar"
                                            className="rounded-circle me-n2"
                                            width="45"
                                        />
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}