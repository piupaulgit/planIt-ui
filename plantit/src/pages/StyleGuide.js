import React from 'react'
import { Table } from 'react-bootstrap';
import '../styles/StyleGuide.scss';
const StyleGuide = ()=> {
    return (
        <div className="style-guide">
            <div className="container-fluid py-5">
                <div className="block">
                    <h4 className="text-uppercase">Typography</h4>
                    <hr></hr>
                    <h1>Heading h1</h1>
                    <h2>Heading h2</h2>
                    <h3>Heading h3</h3>
                    <h4>Heading h4</h4>
                    <h5>Heading h5</h5>
                    <h6>Heading h6</h6>
                </div>
                {/* typography end */}
                <div className="block">
                    <h4 className="text-uppercase">Form Elements</h4>
                </div>
                {/* form elements end */}
                <div className="block">
                    <h4 className="text-uppercase">card</h4>
                    <hr></hr>
                    <div className="card">
                        <div className="card-body">
                                [className="card"]
                        </div>
                    </div>
                </div>
                {/* box end */}
                <div className="block">
                    <h4 className="text-uppercase">Table</h4>
                    <hr></hr>
                    <div className="card">
                        <div className="card-body">
                            <table className="bordered table">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleGuide
