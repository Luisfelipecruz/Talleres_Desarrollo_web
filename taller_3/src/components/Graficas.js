import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Container, Row, Col, Card, Button, Accordion} from "react-bootstrap";
import '../App.css'

const Graficas = () => {

    const {
        register,
        watch,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const [entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...entradas,
            {
                id: entradas.length + 1,
                valores: data.valores,
                etiquetas: data.etiquetas
            }
        ])
        e.target.reset();
    }

    const clear = () => {
        setEntradas([]);
    }

    return (
        <>
            <div className="graficos">
                <Container fluid="true">
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey="0">
                                    Datos grafica
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col xl={{span: 6}}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Row>
                                                    <Col>
                                                        <input type="hidden" value={0} {...register("id")} />
                                                        <label>Campo del valor</label>
                                                        <input type="number" {...register("valores", {
                                                            required: {value: true, message: "Campo obligatorio"},
                                                            min: {value: 0, message: "numero negativo"},
                                                            max: {value: 100, message: "numero mayor a 100"},
                                                            valueAsNumber: true
                                                        })}
                                                               placeholder="Ingrese numero "
                                                               className="form-control my-m2"/>
                                                        {errors.valores && (<span
                                                            className="text-danger text-small d-block mb-2"> {errors.valores.message} </span>)}
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <label>Nombre de la etiqueta</label>
                                                        <input type="text" {...register("etiquetas", {
                                                            required: {value: true, message: "Campo obligatorio"},
                                                            minLength: {value: 2, message: "minimo dos caracteres"}
                                                        })} placeholder="Nombre de la etiqueta"
                                                               className="form-control my-m2"/>
                                                        {errors.etiquetas && (<span
                                                            className="text-danger text-small d-block mb-2"> {errors.etiquetas.message} </span>)}
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <div className="d-grid gap-2">
                                                            <input className="btn btn-md btn-primary" type="submit"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {<pre>{JSON.stringify(watch())}</pre>}
                                            </form>
                                        </Col>
                                        <Col xl={{span: 6}}>
                                            <Row>
                                                <Col xl={{span: 6, offset: 3}}>
                                                    <br/>
                                                    <ul>
                                                        {entradas.map(entradas => (
                                                            <li key={entradas.id}>
                                                                <div>{entradas.id} - {entradas.valores} - {entradas.etiquetas}</div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <button className="btn btn-md btn-danger" onClick={clear}>Clear</button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
                <Container fluid="true">
                    <Card>
                    </Card>
                </Container>
            </div>
        </>
    )
        ;
};

export default Graficas;