import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Col, Form, Table, Button} from 'react-bootstrap'


import './style.css'; 

export default function Formulario(props){
        return(
            <div>
            <Form>
                <h2>Orçamento</h2>
                <Form.Row>
                    <Col md={4}>
                        <Form.Group as={Col} controlid="formGridEmail">
                            <Form.Label >Razão Social</Form.Label>
                            <Form.Control type='text' value={props.razaoSocial} onChange={e=>props.setRazaoSocial(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >CPF</Form.Label>
                        <Form.Control type='text' value={props.cpf} onChange={e=>props.setCpf(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >RG</Form.Label>
                        <Form.Control type='text' value={props.rg} onChange={e=>props.setRg(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Telefone</Form.Label>
                        <Form.Control type='text' value={props.telefone} onChange={e=>props.setTelefone(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Contato</Form.Label>
                        <Form.Control type='text' value={props.contato} onChange={e=>props.setContato(e.target.value)} />
                    </Form.Group>
                </Col>
                </Form.Row>
                <Form.Row>
                <Col md={4}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Endereço</Form.Label>
                        <Form.Control type='text' value={props.endereco} onChange={e=>props.setEndereco(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Município</Form.Label>
                        <Form.Control type='text' value={props.municipo} onChange={e=>props.setMunicipio(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >CEP</Form.Label>
                        <Form.Control type='text' value={props.cep} onChange={e=>props.setCep(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Bairro</Form.Label>
                        <Form.Control type='text' value={props.bairro} onChange={e=>props.setBairro(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Vendedor</Form.Label>
                        <Form.Control as='select' value={props.vendedor} onChange={e=>props.setVendedor(e.target.value)}>
                            <option></option>
                            <option>Leilla</option>
                            <option>Luara</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Forma de Pagamento</Form.Label>
                        <Form.Control as='select' value={props.pagamento} onChange={e=>props.setPagamento(e.target.value)}>
                            <option></option>
                            <option>À Vista</option>
                            <option>A Prazo</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Observações</Form.Label>
                        <Form.Control type='text' value={props.observacoes} onChange={e=>props.setObservacoes(e.target.value)}/>
                    </Form.Group>
                </Col>
                </Form.Row>
                <hr/>
                <h5 style={{marginBottom:'25px', textAlign: 'center'}}>Informações de Entrega</h5>
                <Form.Row>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Data de Entrega</Form.Label>
                        <Form.Control type='date' value={props.dtEntrega} onChange={e=>props.setDtEntrega(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Horário da entrega</Form.Label>
                        <Form.Control type='text' value={props.hrEntrega} onChange={e=>props.setHrEntrega(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Data de Evento</Form.Label>
                        <Form.Control type='date' value={props.dtEvento} onChange={e=>props.setDtEvento(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Horário do Evento</Form.Label>
                        <Form.Control type='text' value={props.hrEvento} onChange={e=>props.setHrEvento(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Data de Devolução</Form.Label>
                        <Form.Control type='date' value={props.dtDevolucao} onChange={e=>props.setDtDevolucao(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Horário de Devolução</Form.Label>
                        <Form.Control type='text' value={props.hrDevolucao} onChange={e=>props.setHrDevolucao(e.target.value)} />
                    </Form.Group>
                </Col>
                </Form.Row>
                <Form.Row>
                <Col md={4}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Entrega do Material</Form.Label>
                        <Form.Control as='select' value={props.entregaMaterial} onChange={e=>props.setEntregaMaterial(e.target.value)}>
                            <option></option>
                            <option value='0'>Empresa Entrega</option>
                            <option value='1'>Cliente Retira</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Devolução do Material</Form.Label>
                        <Form.Control as='select' value={props.devolucaoMaterial} onChange={e=>props.setDevolucaoMaterial(e.target.value)}>
                            <option></option>
                            <option value='0'>Empresa Retira</option>
                            <option value='1'>Cliente Entrega</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label >Nº Diárias</Form.Label>
                        <Form.Control type='number' value={props.nDiarias} onChange={e=>props.setNDiarias(e.target.value)}/>
                    </Form.Group>
                </Col>
                </Form.Row>   
                <Form.Row>
                    <Col md={12}>
                        <Form.Group as={Col} controlid='formGridEmail'>
                            <Form.Label>Local do Evento / Ponto de Referência</Form.Label>
                            <Form.Control type='text' value={props.localEvento} onChange={e=>props.setLocalEvento(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Form.Row>  
                <Form.Row>
                    <Col md={3}>
                        <Form.Group as={Col} controlid='formGridEmail'>
                            <Form.Label>Locação</Form.Label>    
                            <Form.Control type='number' value={props.locacao} onChange={e=>props.setLocacao(e.target.value)}/>
                        </Form.Group>    
                    </Col>   
                    <Col md={3}>
                        <Form.Group as={Col} controlid='formGridEmail'>
                            <Form.Label>Demais Diárias</Form.Label>    
                            <Form.Control type='number' value={props.diarias} onChange={e=>props.setDiarias(e.target.value)}/>
                        </Form.Group>    
                    </Col>
                    <Col md={3}>
                        <Form.Group as={Col} controlid='formGridEmail'>
                            <Form.Label>Desconto</Form.Label>    
                            <Form.Control type='number' value={props.desconto} onChange={e=>props.setDesconto(e.target.value)}/>
                        </Form.Group>    
                    </Col> 
                    <Col md={3}>
                        <Form.Group as={Col} controlid='formGridEmail'>
                            <Form.Label>Taxa</Form.Label>    
                            <Form.Control type='number' value={props.taxa} onChange={e=>props.setTaxa(e.target.value)}/>
                        </Form.Group>    
                    </Col>
                </Form.Row>       
                <hr/>
                <h5 style={{marginBottom:'25px', textAlign: 'center'}}>Dados dos Produtos</h5>    
                <div className='divtable'>
                    <Table striped bordered hover className='tabela'>
                        <thead>
                            <tr>
                                <th>Quant.</th>
                                <th>Descrição</th>
                                <th>valor Unit.</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        {props.itens.map((item, index)=>(
                            <tbody key={index}>
                                <tr>
                                    <td>{item.qnt}</td>
                                    <td>{item.descri}</td>
                                    <td>{item.valorUnit}</td>
                                    <td>{item.total}</td>
                                </tr>
                            </tbody>
                        ))}
                        
                    </Table>

                </div>
                <div style={{marginTop:'10px'}}>
                <Col md={2} style={{float:'right'}}>
                    <Form.Control style={{display:'inline'}}type='text' value='00,00' readOnly/>
                </Col>
                    <h5 style={{float:'right', marginTop:'5px'}}>Total</h5>
                </div>
                <Button variant='success' type='button' className='salvar' disabled>Salvar</Button>
                <Link to={`/orcamento`}><Button variant='primary' type='button' className='imprimir'>Imprimir</Button></Link>
                <hr/>
                <h4 style={{marginBottom:'25px', textAlign: 'center'}}>Adicionar produto</h4>
                <Form.Row style={{justifyContent:'center'}}>
                    <Col md={6}>
                    <Form.Label as={Col} controlid="formGridEmail">Produtos</Form.Label>
                    <Form.Control as='select' onChange={e=>props.setProduto(e.target.value)}>
                        <option></option>
                        <option>Mesa</option>
                        <option>vaso</option>
                        <option>bandeja</option>
                        <option>Boneca</option>
                        <option>arranjo</option>
                    </Form.Control>
                    </Col>
                    <Col md={2}>
                        <Form.Label as={Col} controlid='formGridEmail'>Quantidade</Form.Label>
                        <Form.Control type='number' onChange={e=>props.setqtn(e.target.value)}/>
                    </Col>
                </Form.Row>
                <div style={{textAlign:'center', marginTop:'15px'}}>
                    <Button variant='secondary' type='button' size='md' onClick={props.handleadd}>Adicionar</Button>   
                </div>

            </Form>       
            
        </div>
    )
}