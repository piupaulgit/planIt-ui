import React, { useState } from 'react'
import Base from '../helper/Base'
import '../assets/scss/Clients.scss';
import { Button, Form, Modal } from 'react-bootstrap';

const Clients = () => {
    const [show, setShow] = useState(false);
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);
  
    return (
        <Base title="Clients">
            <div className="page-content">
                <div className="row mb-4">
                    <div className="col-md-5">
                        <div className="form-group input-has-icon">
                            <input type="text"  className="form-control rounded" placeholder="Search Client"></input>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="col-md-7 text-right">
                        <Button className="btn btn-primary" onClick={handleShowModal}>Add New client</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="client pt-2 ">
                                        <div className="client-image">
                                            P
                                        </div>
                                        <div className="client-body">
                                            <h4 className="client-name">Prima Roy</h4>
                                            <p className="client-description">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nisi odio quae.
                                            </p>
                                            <div className="client-tags text-center">
                                                <span className="badge badge-sm badge-primary">1 project</span>
                                                <span className="badge badge-primary">3k rev</span>
                                            </div>
                                        </div>
                                        <div className="client-footer">
                                            <a href="" title="View Projects">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-code" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
                                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                                </svg>
                                            </a>
                                            <a href="" title="View Profile">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* modal */}
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Client</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form>
                        <div className="form-group">
                            <input type="text" className="form-control rounded" placeholder="Full Name" ></input>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Description" rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control rounded" placeholder="Email Address" ></input>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control rounded" placeholder="Mobile Number" ></input>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseModal}>
                    Add Client
                </Button>
                </Modal.Footer>
            </Modal>
        </Base>
        
    )
}

export default Clients
