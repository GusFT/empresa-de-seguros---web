import FormModel from "../components/FormModel.css";
import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Form } from "react-bootstrap";



const CRUD = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // variaveis do form 
    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f3, setF3] = useState('')
    const [f4, setF4] = useState('')
    const [f5, setF5] = useState('')

    // variaveis do form de edição 
    const [Eid, setEId] = useState('')
    const [Ef1, setEF1] = useState('')
    const [Ef2, setEF2] = useState('')
    const [Ef3, setEF3] = useState('')
    const [Ef4, setEF4] = useState('')
    const [Ef5, setEF5] = useState('')




    const [data, setData] = useState([]);

    useEffect(() => {

        getData();

    }, [])

    const getData = () => {
        axios.get(props.crudUrl)
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleEdit = (id) => {
        handleShow();
        axios.get(props.crudUrl + '/' + id)
            .then((result) => {
                setEF1(result.data.nome);
                setEF2(result.data.email);
                setEF3(result.data.tel);
                setEF4(result.data.servico);
                setEF5(result.data.descricao);
                setEId(id);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleDelete = (id) => {
        if (window.confirm("Tem certeza que deseja deletar ?") == true) {
            axios.delete(props.crudUrl + '/' + id)
                .then((result) => {
                    if (result.status == 200) {
                        toast.success('Cadastro apagado com sucesso', {
                            position: toast.POSITION.BOTTOM_LEFT,
                        });
                        getData();
                    }
                }).catch((error) => {
                    toast.error(error);
                })
        }
    }

    const handleUpdate = () => {
        const url = props.crudUrl + '/' + Eid
        const data = {
            "id": Eid,
            "nome": Ef1,
            "email": Ef2,
            "tel": Ef3,
            "servico": Ef4,
            "descricao": Ef5
        }

        axios.put(url, data)
            .then((result) => {
                handleClose();
                getData();
                clear();
                toast.success('Modificação bem sucedida', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });

            }).catch((error) => {
                toast.error(error);
            })
    }

    const handleSave = () => {
        const url = props.crudUrl
        const data = {
            "nome": f1,
            "email": f2,
            "tel": f3,
            "servico": f4,
            "descricao": f5
        }

        axios.post(url, data)
            .then((result) => {
                getData();
                clear();
                toast.success('Cadastro bem sucedido', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });

            }).catch((error) => {
                toast.error(error);
            })
    }

    const clear = () => {
        setF1('');
        setF2('');
        setF3('');
        setF4('');
        setF5('');
        setEF1('');
        setEF2('');
        setEF3('');
        setEF4('');
        setEF5('');
        setEId('');
    }



    return (
        <Fragment>
            {/* form */}
            <div className={props.cName}>

                <h1> {props.title} </h1>

                <Container >

                    <Row>
                        <Col>
                            <input type="text" className="form-control" placeholder={props.field1}
                                value={f1} onChange={(e) => setF1(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <input type="text" className="form-control" placeholder={props.field2}
                                value={f2} onChange={(e) => setF2(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="text" className="form-control" placeholder={props.field3}
                                value={f3} onChange={(e) => setF3(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <input type="text" className="form-control" placeholder={props.field4}
                                value={f4} onChange={(e) => setF4(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className="form-control" placeholder={props.tField1} rows={props.rows1}
                                value={f5} onChange={(e) => setF5(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Form>

                        <Button onClick={handleSave}>{props.button1}</Button>
                    </Form>


                </Container>




                <ToastContainer />
                <h1 id="titleTable"> Cadastros </h1>
            </div>

            {/* tabela select * */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>tel</th>
                        <th>serviço prestado</th>
                        <th>descrição</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.tel}</td>
                                        <td>{item.servico}</td>
                                        <td>{item.descricao}</td>
                                        <th colSpan={2}>
                                            <button className="btn btn-outline-primary btn-lg" onClick={() => handleEdit(item.id)}>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </button> &nbsp;
                                            <button className="btn btn-outline-danger btn-lg" onClick={() => handleDelete(item.id)}>
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }


                </tbody>
            </Table>

            {/* form edit */}
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container >
                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder={props.field1}
                                    value={Ef1} onChange={(e) => setEF1(e.target.value)}
                                />
                            </Col>

                            <Col>
                                <input type="text" className="form-control" placeholder={props.field2}
                                    value={Ef2} onChange={(e) => setEF2(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder={props.field3}
                                    value={Ef3} onChange={(e) => setEF3(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder={props.field4}
                                    value={Ef4} onChange={(e) => setEF4(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea className="form-control" placeholder={props.tField1} rows={props.rows1}
                                    value={Ef5} onChange={(e) => setEF5(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-primary btn-lg" onClick={handleUpdate}>
                        <i class="fa-regular fa-floppy-disk"></i>
                    </button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    );
}
export default CRUD;