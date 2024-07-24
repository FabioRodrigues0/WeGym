import { useState } from 'react'
import './App.css'
import {Carousel, Nav} from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like
                        the one in previous versions of Bootstrap. Check out the examples below for how you can remix
                        and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Subscrições</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#collection"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#toggles2"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/*Galeria*/}
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32">
                                <use xlinkHref="#bootstrap"></use>
                            </svg>
                        </a>
                        <p className="text-body-secondary">© 2024</p>
                    </div>
                    <div className="col mb-3">

                        <h6 className="text-uppercase fw-bold">Contact</h6>

                        <p><i className="mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="mr-3"></i> info@example.com</p>
                        <p><i className="mr-3"></i> + 01 234 567 88</p>
                        <p><i className="mr-3"></i> + 01 234 567 89</p>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}

export default App
