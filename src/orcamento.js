import React from 'react';

import './orcamento.css';


export default function orcamento(props){
   console.log(props)
    return(
    <div className="page nfeArea">
    <img className="imgCanceled" src="tarja_nf_cancelada.png" alt="" />
    <img className="imgNull" src="tarja_nf_semvalidade.png" alt="" />
    <div className="boxFields" style={{paddingTop: "5px"}}>
        <table cellPadding="0" cellSpacing="0" border="1">
            <tbody>
                <tr>
                    <td rowSpan="3" style={{width: "20%", height:'150px',borderRight:'none'}}>
                        <img className="client_logo" src={require('./logo/seu-logo.png')} alt="" />
                    </td>
                    <td rowSpan="3" style={{width: "40%", fontSize: "15pt", borderLeft:'none'}} className="txt-center">
                        <span className="bold block">ATELIÊ ESTÚDIO 7</span>
                        <span className="block">Rua Lugar Tal, 1111</span>
                        <span className="block">
                            CARNEIROS - AL
                        </span>
                        <span className='block'>
                            Cep: 57000-000
                        </span>
                        <span className="block">
                           Fone: (82) 9 9999-9999
                        </span>
                    </td>
                    <td rowSpan="3" className="txtc txt-center" style={{width: "15%", height: "29.5mm"}}>
                        <h3 style={{marginTop: '30px'}} >1º VIA CLIENTE</h3>
                    </td>
                    <td className="txt-center" style={{width: "20%", fontSize:'12pt'}}>
                        <h5 className='bold' style={{marginTop: '10px', marginBottom:'-10px'}} >Nº 01</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="nf-label" style={{fontSize:'10pt'}}>DATA DE EMISSÃO</span>
                        <span className="bold block txt-center info" style={{fontSize:'12pt', marginBottom:'-10px'}}>01/01/2020</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="nf-label" style={{fontSize:'10pt'}}>CNPJ</span>
                        <span className="bold block txt-center info" style={{fontSize:'12pt', marginBottom:'-10px'}}>111.111.111-11</span>
                    </td>
                </tr>
            </tbody>
        </table>
        {/*Natureza da Operação */}
        <table cellPadding="0" cellSpacing="0" className="boxNaturezaOperacao no-top" border="1" >
            <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        <span className="nf-label">Razão Social/Nome</span>
                        <span className="info">{props.razaoSocial}</span>
                    </td>
                    <td style={{width:'10%'}}> 
                        <span className="nf-label">Código</span>
                        <span className="info" style={{textAlign:'center'}}>15</span>
                    </td>
                    <td style={{width: "20%"}}>
                        <span className="nf-label">CNPJ/CPF</span>
                        <span className="info">{props.cpf}</span>
                    </td>
                    <td style={{width: "20%"}}>
                        <span className="nf-label">RG</span>
                        <span className="info">{props.rg}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table cellPadding="0" cellSpacing="0" className="boxNaturezaOperacao no-top" border="1" >
            <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        <span className="nf-label">Endereço</span>
                        <span className="info">{props.endereco}</span>
                    </td>
                    <td style={{width:'30%'}}> 
                        <span className="nf-label">Bairro/Distrito</span>
                        <span className="info" >{props.bairro}</span>
                    </td>
                    <td style={{width: "20%"}}>
                        <span className="nf-label">CEP</span>
                        <span className="info">{props.cep}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table cellPadding="0" cellSpacing="0" className="boxNaturezaOperacao no-top" border="1" >
            <tbody>
                <tr>
                    <td style={{width: "35%"}}>
                        <span className="nf-label">Município</span>
                        <span className="info">{props.municipo}</span>
                    </td>
                    <td style={{width:'15%'}}> 
                        <span className="nf-label">Fone/Cel.</span>
                        <span className="info" >{props.telefone}</span>
                    </td>
                    <td style={{width: "15%"}}>
                        <span className="nf-label">Contato</span>
                        <span className="info">{props.contato}</span>
                    </td>
                    <td style={{width: "20%"}}>
                        <span className="nf-label">Vendedor</span>
                        <span className="info">{props.vendedor}</span>
                    </td>
                    <td style={{width: "15%"}}>
                        <span className="nf-label">Form. Pgt.</span>
                        <span className="info">{props.pagamento}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table cellPadding="0" cellSpacing="0" className="boxNaturezaOperacao no-top" border="1" >
            <tbody>
                <tr>
                    <td style={{width: "80%"}}>
                        <span className="nf-label">Observação</span>
                        <span className="info">{props.observacoes}</span>
                    </td>
                    <td style={{width:'20%'}}> 
                        <span className="nf-label">Nº diárias</span>
                        <span className="info" >{props.nDiarias}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        
        {/*Destinatário/Emitente*/}
        <p className="area-name" style={{fontSize:'8pt'}}>Informações de Entrega</p>
        <table cellPadding="0" cellSpacing="0" className="boxDestinatario" border="1" >
            <tbody>
                <tr>
                    <td style={{width: "20%", borderBottom:'none', borderRight:'none'}}>
                        <p style={{marginTop:'10px', fontSize:'12pt', display:'inline'}}>Entrega: </p>
                        <p className='bold' style={{marginTop:'10px', fontSize:'15pt', display:'inline', marginLeft:'30px'}}>{props.dtEntrega}</p>
                    </td>
                    <td style={{borderLeft:'none', borderBottom:'none', width:'8%'}}>
                        <span>Hora: {props.hrEntrega}h</span>
                    </td>
                    <th colSpan="2" style={{borderLeft:'none', borderTop:'none', borderBottom:'none',width:'12%'}}>
                        <p className='bold' style={{textAlign:'center', fontSize:'12pt', borderBottom:"1px solid black"}}>
                            Entrega de Material
                        </p>
                    </th>
                    <th colSpan="2" style={{borderLeft:'none', borderTop:'none', borderBottom:'none',width:'12%'}}>
                        <p className='bold' style={{textAlign:'center', fontSize:'12pt', borderBottom:"1px solid black"}}>
                            Devol. Material
                        </p>
                    </th>

                </tr>
                <tr>
                    <td style={{width: "20%", borderTop:'none', borderBottom:'none', borderRight:'none'}}>
                        <p style={{marginTop:'10px', fontSize:'12pt', display:'inline'}}>Evento: </p>
                        <p className='bold' style={{marginTop:'10px', fontSize:'15pt', display:'inline', marginLeft:'33px'}}>{props.dtEvento}</p>
                    </td>
                    <td style={{borderLeft:'none', borderTop:'none', borderBottom:'none',width:'8%'}}>
                        <span>Hora: {props.hrEvento}h</span>
                    </td>
                    <td style={{borderLeft:'none', borderTop:'none', borderBottom:'none',width:'12%', fontSize:'12pt', borderRight:'none'}}>
                        <span style={{marginLeft:'15px'}}>0 - Empresa Entrega</span>
                    </td>
                    <td style={{width:'5%', border:'none', borderRight:'1px solid'}}>
                         <span className="info">[{props.entregaMaterial}]</span>
                    </td>
                    <td style={{borderLeft:'none', borderTop:'none', borderBottom:'none',width:'20%', fontSize:'12pt', borderRight:'none'}}>
                        <span style={{marginLeft:'15px'}}>0 - Empresa Retira</span>    
                    </td>
                    <td style={{width:'5%', border:'none', borderRight:'1px solid'}}>
                         <span className="info">[{props.devolucaoMaterial}]</span>
                    </td>
                    
                </tr>
                <tr>
                    <td style={{width: "20%", borderTop:'none', borderRight:'none'}}>
                        <p style={{marginTop:'10px', fontSize:'12pt', display:'inline'}}>Devolução: </p>
                        <p className='bold' style={{marginTop:'10px', fontSize:'15pt', display:'inline', marginLeft:'10px'}}>{props.dtDevolucao}</p>
                    </td>
                    <td style={{borderLeft:'none', borderTop:'none'}}/>

                    <td style={{borderLeft:'none', borderTop:'none',width:'20%', fontSize:'12pt', borderRight:'none'}}>
                        <span style={{marginLeft:'15px'}}>1 - Cliente Retira</span>
                    </td>
                    <td style={{border:'none', borderRight:'1px solid'}}/>
                    <td style={{borderLeft:'none', borderTop:'none',width:'20%', fontSize:'12pt',borderRight:'none'}}>
                        <span style={{marginLeft:'15px'}}>1 - Cliente Entrega</span>
                    </td>
                    <td style={{borderLeft:'none', borderTop:'none'}}/>
                </tr>
                
            </tbody>
        </table>
        <table cellPadding="0" cellSpacing="0" className="boxDestinatario" style={{borderLeft:'1px solid', borderBottom:'1px solid', borderRight:'1px solid'}} >
        <tr >
            <td  >
                <p className='bold' style={{fontSize:'12pt', width:'100%'}}>Local do Evento / Ponto de Referência</p>
                <p style={{fontSize:'12pt'}}>{props.localEvento}</p>
            </td>
        </tr>
        </table>
        
        
        {/*Dados do produto/serviço*/}
        <p className="area-name" style={{fontSize:'8pt'}}>Dados do produto/serviço</p>
        <div className="wrapper-border">
            <table cellPadding="0" cellSpacing="0" border="1" className="boxProdutoServico" style={{fontSize:'12pt',textAlign:'center', borderBottom:'none'}}>
                <thead className="listProdutoServico" id="table" style={{borderBottom:'1px solid'}} >
                    <tr className="titles">
                        <th className="cod" style={{width: "15.5mm"}}>CÓDIGO</th>
                        <th className="descrit" style={{width: "66.1mm"}}>DESCRIÇÃO </th>
                        <th className="ncmsh">Unit</th>
                        <th className="cst">Valor Unit.</th>
                        <th className="cfop">Total</th>
                      
                    </tr>
                </thead>
                <tbody >
                    {props.itens.map(item=>(
                        <tr style={{border:'none'}}>
                            <th>{item.codigo}</th>
                            <th>{item.descri}</th>
                            <th>{item.qnt}</th>
                            <th>{item.valorUnit}</th>
                            <th>{item.total}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/**/}
        <p className="area-name" style={{fontSize:'8pt'}}>Informações de Pagamento</p>
        <table cellPadding="0" cellSpacing="0"  className="boxIssqn" style={{fontSize:'12pt', borderTop:'1px solid', borderRight:'1px solid', borderLeft:'1px solid'}} >
            <tbody >
                <tr >
                    <td className="field inscrMunicipal" style={{borderRight:'1px solid'}}>
                        <span className="nf-label">Locação</span>
                        <span className="info txt-right">{props.locacao}</span>
                    </td>
                    <td className="field valorTotal"  style={{borderRight:'1px solid'}}>
                        <span className="nf-label">(+) Demais Diárias</span>
                        <span className="info txt-right">{props.diarias}</span>
                    </td>
                    <td className="field baseCalculo"  style={{borderRight:'1px solid'}}>
                        <span className="nf-label">(-) Desconto</span>
                        <span className="info txt-right">{props.desconto}</span>
                    </td>
                    <td className="field valorIssqn">
                        <span className="nf-label">(+) Taxa</span>
                        <span className="info txt-right">{props.taxa}</span>
                    </td>
                    <td className="field valorIssqn" style={{border:'2px solid'}}>
                        <span className="nf-label bold">Valor a Pagar</span>
                        <span className="info txt-right bold" style={{fontSize:'18pt', marginTop:'-10px'}}>00,00</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellPadding="0" cellSpacing="0" border="1" className="boxIssqn" >
            <tbody>
                <tr style={{borderTop:'none'}}>
                    <td className="field inscrMunicipal">
                        <span className="nf-label">Controle de Embalagem</span>
                        <span className="info txt-left">Não</span>
                    </td>
                    <td className="field valorTotal">
                        <span className="nf-label">CX. Plast.</span>
                        <span className="info txt-right">0</span>
                    </td>
                    <td className="field baseCalculo">
                        <span className="nf-label">CX. Madeira</span>
                        <span className="info txt-right">0</span>
                    </td>
                    <td className="field valorIssqn">
                        <span className="nf-label">CX. Papelão.</span>
                        <span className="info txt-right">0</span>
                    </td>
                    <td className="field valorIssqn">
                        <span className="nf-label">Vencimento</span>
                        <span className="info txt-right">01/01/2020</span>
                    </td>
                </tr>
            </tbody>
        </table>

        {/*Dados adicionais*/}
        <p className="area-name" style={{fontSize:'8pt'}}>Dados adicionais</p>
        <table cellPadding="0" cellSpacing="0" border="1" className="boxDadosAdicionais" style={{fontSize:'12pt'}}>
            <tbody>
                <tr>
                    <td className="field infoComplementar">
                        <span className="nf-label">INFORMAÇÕES COMPLEMENTARES</span>
                        <span></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellPadding="0" cellSpacing="0" border="1" className="boxDadosAdicionais" style={{fontSize:'12pt'}}>
            <tbody>
                <tr>
                    <td className="field infoComplementar">
                        <span className="nf-label bold">LEIA COM ATENÇÃO</span>
                        <span>1 - As faltas e avarias de material serão pagas pelo locatário, no ato da devolução, de acordo com o preço de reposição constante deste pedido.</span>
                        <br/>
                        <span>2 - Pede-se conferir o material. Não serão aceitas reclamações posteriores.</span>
                        <br/>
                        <span>3 - O material não devolvido na data marcada pagará novos aluguéis por dia de atraso.</span>
                        <br/>
                        <span>4 - O material deverá ser devolvido nas embalagens</span>                    
                        <br/>
                        <span>5 - Nos objetos de prata ou de alumínio não usar "bombril", esponjas ásperas, sapólio ou outros materiais abrasivos e nem levar ao fogo ou forno</span>
                        <br/>
                        <span>6 - Guardanapos e toalhas que estiverem manchados com frutas vermelhas, graxa óleo ou submetidos para a limpeza de chão, serão cobrados integralmente.</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <footer>
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td style={{textAlign: "right"}}><strong>Ateliê Estúdio 7 www.atelieestudio7.com</strong></td>
                    </tr>
                </tbody>
            </table>
        </footer>
    </div>
</div>
    )
}