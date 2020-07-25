import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Formulario from './formulario';
import Orcamento from './orcamento';


export default function Routes(){
    const [itens, setIntens] = useState([{}]);
    const [produto, setProduto] = useState('');
    const [qnt, setqtn] = useState(0);
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [contato, setContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [municipo, setMunicipio] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [vendedor, setVendedor] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [dtEntrega, setDtEntrega] = useState('');
    const [hrEntrega, setHrEntrega] = useState('');
    const [dtEvento, setDtEvento] = useState('');
    const [hrEvento, setHrEvento] = useState('');
    const [dtDevolucao, setDtDevolucao] = useState('');
    const [hrDevolucao, setHrDevolucao] = useState('');
    const [entregaMaterial, setEntregaMaterial] = useState('');
    const [devolucaoMaterial, setDevolucaoMaterial] = useState('');
    const [localEvento, setLocalEvento] = useState('');
    const [nDiarias, setNDiarias] = useState('');
    const [locacao, setLocacao] = useState(0);
    const [diarias, setDiarias] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [taxa, setTaxa] = useState(0);






    function handleadd(e){
        e.preventDefault();
        const newItem = { 
            codigo: 1,
            qnt: qnt,
            descri: produto,
            valorUnit: 10,
            total: qnt * 10
        }
            setIntens([ ...itens, newItem])
        }

    return(
        <BrowserRouter>
            <Switch>
                <Route 
                    path='/' 
                    exact 
                    render={
                        (props)=>
                            <Formulario 
                                {...props} 
                                setProduto={setProduto}
                                setqtn={setqtn}
                                handleadd={handleadd}
                                itens={itens}
                                razaoSocial={razaoSocial}
                                setRazaoSocial={setRazaoSocial}
                                cpf={cpf}
                                setCpf={setCpf}
                                rg={rg}
                                setRg={setRg}
                                telefone={telefone}
                                setTelefone={setTelefone}
                                contato={contato}
                                setContato={setContato}
                                endereco={endereco}
                                setEndereco={setEndereco}
                                municipo={municipo}
                                setMunicipio={setMunicipio}
                                cep={cep}
                                setCep={setCep}
                                bairro={bairro}
                                setBairro={setBairro}
                                vendedor={vendedor}
                                setVendedor={setVendedor}
                                pagamento={pagamento}
                                setPagamento={setPagamento}
                                observacoes={observacoes}
                                setObservacoes={setObservacoes}
                                dtEntrega={dtEntrega}
                                setDtEntrega={setDtEntrega}
                                hrEntrega={hrEntrega}
                                setHrEntrega={setHrEntrega}
                                dtEvento={dtEvento}
                                setDtEvento={setDtEvento}
                                hrEvento={hrEvento}
                                setHrEvento={setHrEvento}
                                dtDevolucao={dtDevolucao}
                                setDtDevolucao={setDtDevolucao}
                                hrDevolucao={hrDevolucao}
                                setHrDevolucao={setHrDevolucao}
                                entregaMaterial={entregaMaterial}
                                setEntregaMaterial={setEntregaMaterial}
                                devolucaoMaterial={devolucaoMaterial}
                                setDevolucaoMaterial={setDevolucaoMaterial}
                                localEvento={localEvento}
                                setLocalEvento={setLocalEvento}
                                nDiarias={nDiarias}
                                setNDiarias={setNDiarias}
                                locacao={locacao}
                                setLocacao={setLocacao}
                                diarias={diarias}
                                setDiarias={setDiarias}
                                desconto={desconto}
                                setDesconto={setDesconto}
                                taxa={taxa}
                                setTaxa={setTaxa}
                             />
                        }/>
                <Route 
                    path='/orcamento' 
                    render={
                        (props)=>
                            <Orcamento 
                                {...props}
                                itens={itens}
                                qnt={qnt}
                                produto={produto}
                                razaoSocial={razaoSocial}
                                cpf={cpf}
                                rg={rg}
                                telefone={telefone}
                                contato={contato}
                                endereco={endereco}
                                municipo={municipo}
                                cep={cep}
                                bairro={bairro}
                                vendedor={vendedor}
                                pagamento={pagamento}
                                observacoes={observacoes}
                                dtEntrega={dtEntrega}
                                hrEntrega={hrEntrega}
                                dtEvento={dtEvento}
                                hrEvento={hrEvento}
                                dtDevolucao={dtDevolucao}
                                hrDevolucao={hrDevolucao}
                                entregaMaterial={entregaMaterial}
                                devolucaoMaterial={devolucaoMaterial}
                                localEvento={localEvento}
                                nDiarias={nDiarias}
                                locacao={locacao}
                                diarias={diarias}
                                desconto={desconto}
                                taxa={taxa}
                            />
                        } />
            </Switch>
        </BrowserRouter>
    )
}