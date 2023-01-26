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

    // variaveis do de comparação (Db = data base)
    const [Dbf1, setDbF1] = useState('')
    const [Dbf2, setDbF2] = useState('')






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




    const clear = () => {
        setF1('');
        setF2('');
    }

    const handleCompare = (id) => {

        axios.get(props.crudUrl + '/' + id)
            .then((result) => {
                setF1(id);
                setDbF1(result.data.nome);
                setDbF2(result.data.senha);
                if(Dbf2 == f2) {
                    toast.success('Bem vindo ' + Dbf1, {
                        position: toast.POSITION.BOTTOM_LEFT,
                    });
                }
                else {
                    toast.error('Id ou senha incorretos ', {
                        position: toast.POSITION.BOTTOM_LEFT,
                    });

                }
                clear();

            }).catch((error) => {
                toast.error('Id ou senha incorretos ', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
                clear();
            })

    }



    return (
        <Fragment>
            {/* form */}
            <div className={props.cName}>
                <form>

                    <h1> {props.title} </h1>

                    <Container >

                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder={props.field1}
                                    value={f1} onChange={(e) => setF1(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="password" className="form-control" placeholder={props.field2}
                                    value={f2} onChange={(e) => setF2(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Form>

                            <Button onClick={() => handleCompare(f1)} >{props.button1}</Button>
                        </Form>


                    </Container>




                    <ToastContainer />
                </form>

            </div>

        </Fragment>
    );
}
export default CRUD;