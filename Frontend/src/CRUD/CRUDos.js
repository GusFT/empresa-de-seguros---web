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
import { FormControl } from "react-bootstrap";


const CRUD = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showO, setShowO] = useState(false);
    const handleCloseO = () => setShowO(false);
    const handleShowO = () => setShowO(true);

    // variaveis do form 
    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f5, setF5] = useState('')

    // guarda variaveis do form para não sumirem (P = permanece)
    const [Pf1, setPF1] = useState('')
    const [Pf2, setPF2] = useState('')
    const [Pf5, setPF5] = useState('')

    // variaveis do form envio ordem (S = send)
    const [Sid, setSId] = useState('')
    const [Sf1, setSF1] = useState('')
    const [Sf2, setSF2] = useState('')
    const [Sf3, setSF3] = useState('')
    const [Sf4, setSF4] = useState('')
    const [Sf5, setSF5] = useState('')
    

    // variaveis do form de edição  (E = edit)
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

    // abre a janela preenche os campos com os dados e pega id 
    const handleEdit = (id) => {
        handleShow();
        axios.get(props.crudUrl + '/' + id)
            .then((result) => {
                setEF1(result.data.tecnico);
                setEF2(result.data.id_servico);
                setEF3(result.data.relato);
                setEF4(result.data.laudo);
                setEF5(result.data.imagem);
                console.log(Ef4.value)
                setEId(id);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // abre a janela e pega id 
    const handleEditS = (id) => {
        handleShowO();
        axios.get(props.crudUrl + '/' + id)
            .then(() => {
                setSId(id);
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
            "tecnico": Ef1,
            "id_servico": Ef2,
            "relato": Ef3,
            "laudo": Ef4,
            "imagem": Ef5,
            "cliente": Pf1,
            "servico": Pf2,
            "descricao": Pf5  
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

    const handleUpdateS = () => {
        const url = props.crudUrl + '/' + Sid
        const data = {
            "id": Sid,
            "tecnico": Sf1,
            "id_servico": Sf2,
            "relato": Sf3,
            "laudo": Sf4,
            "imagem": Sf5,
            "cliente": Pf1,
            "servico": Pf2,
            "descricao": Pf5  
        }

        axios.put(url, data)
            .then((result) => {
                getData();
                clear();
                handleCloseO();
                toast.success('Cadastro bem sucedido', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });

            }).catch((error) => {
                toast.error(error);
            })
    }


    const handleSave = () => {
        const url = props.crudUrl
        const data = {
            "cliente": f1,
            "servico": f2,
            "descricao": f5       
        }

        axios.post(url, data)
            .then((result) => {
                getData();
                remain();
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
        setF5('');
        setEF1('');
        setEF2('');
        setEF3('');
        setEF4('');
        setEF5('');
        setEId('');
        setSF1('');
        setSF2('');
        setSF3('');
        setSF4('');
        setSF5('');
        setSId('');
    }

    const remain = () => {
        setPF1(f1);
        setPF2(f2);
        setPF5(f5); 
    }


    return (
        <Fragment>
            {/* form */}
            <div className={props.cName}>

                <h1> {props.title} </h1>

                <Container >
                    <Row>
                        <Col>
                            <input type="text" className="form-control" placeholder={props.chamadof1}
                                value={f1} onChange={(e) => setF1(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <input type="text" className="form-control" placeholder={props.chamadof2}
                                value={f2} onChange={(e) => setF2(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className="form-control" placeholder={props.chamadof3} rows={props.rows1}
                                value={f5} onChange={(e) => setF5(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Form>
                        <Button onClick={handleSave}>{props.button1}</Button>
                    </Form>
                </Container>




                <ToastContainer />

            </div>

            {/* tabela select * */}
            <div>
                <h1 id="titleTable"> Ordens de serviço</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>cliente</th>
                        <th>serviço desejado</th>
                        <th>descricao do serviço</th>
                        <th>técnico</th>
                        <th>id do serviço</th>
                        <th>relato</th>
                        <th>laudo</th>
                        <th>imagem</th>
                        <th>Adicionar</th>
                        <th>Editar/Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.cliente}</td>
                                        <td>{item.servico}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.tecnico}</td>
                                        <td>{item.id_servico}</td>
                                        <td>{item.relato}</td>
                                        <td>{item.laudo}</td>   
                                        <td>{item.imagem}</td>
                                        <th>
                                            {/*{onClick={handleShowO}}*/}
                                            <button className="btn btn-outline-success btn-lg" onClick={() => handleEditS(item.id)}>
                                                <i class="fa-regular fa-share-from-square"></i>
                                            </button>
                                        </th>
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
            

             {/* form send ordem */}
             <Modal show={showO} onHide={handleCloseO} >
                <Modal.Header closeButton>
                    <Modal.Title>Enviar Ordem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container >
                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder={props.field1}
                                    value={Sf1} onChange={(e) => setSF1(e.target.value)}
                                />
                            </Col>

                            <Col>
                                <input type="text" className="form-control" placeholder={props.field2}
                                    value={Sf2} onChange={(e) => setSF2(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea className="form-control" placeholder={props.tField1} rows={props.rows1}
                                    value={Sf3} onChange={(e) => setSF3(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label className="custom-file-label" for="validatedCustomFile">Escolha o arquivo do laudo</label>
                                <FormControl type="file" className="custom-file-input" id="validatedCustomFile" required
                                    onChange={(e) => setSF4(e.target.value)}
                                />
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <label className="custom-file-label" for="validatedCustomFile">Adicione os arquivos de imagem</label>
                                <FormControl type="file" className="custom-file-input" id="validatedCustomFile" required 
                                    onChange={(e) => setSF5(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-success btn-lg" onClick={handleUpdateS}>
                        <i class="fa-regular fa-floppy-disk"></i>
                    </button>
                </Modal.Footer>
            </Modal>


            {/* form edit */}
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Ordem</Modal.Title>
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
                                <textarea className="form-control" placeholder={props.tField1} rows={props.rows1}
                                    value={Ef3} onChange={(e) => setEF3(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label className="custom-file-label" for="validatedCustomFile">Escolha o arquivo do laudo</label>
                                <FormControl type="file" className="custom-file-input" id="validatedCustomFile" required
                                    onChange={(e) => setEF4(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label className="custom-file-label" for="validatedCustomFile">Adicione os arquivos de imagem</label>
                                <FormControl type="file" className="custom-file-input" id="validatedCustomFile" required
                                    onChange={(e) => setEF5(e.target.value)}
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