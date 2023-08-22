import './index.scss';
import Sorvete from '../../assets/images/sorvetes.png';
import Cabecalho from '../../components/cabecalho';
import ListaCompras from '../../components/listaCompras';
import { useState } from 'react';

export default function Sorvetes() {

    const [novoP, setNovoP] = useState('');
    const [precoN, setPrecoN] = useState(0);
    const [lista, setLista] = useState([]);
    const [total, setTotal] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    function adicionar() {
        if (novoP && precoN) {

            let p = Number(precoN.replace(',', '.'));

            let item = {
                produto: novoP,
                preco: p.toFixed(2),
            }

            setNovoP('');
            setPrecoN('');
            setLista([...lista, item]);
            setTotal(total + p);
        }
    }

    function novoItem(itens) {

        let novo = lista.filter(item => item.produto !== itens.produto);
        setLista([...novo]);
        setTotal(total - itens.preco);

    }

    function mostrarMais() {
        setMostrar(!mostrar)
    }


    return (
        <main className='pagina-sorvetes'>
            <Cabecalho />
            <div className='container'>
                <div className='principal'>
                    <div className='principal-imagem'>
                        <img src={Sorvete} alt='sorvete' />
                        <p>Sorveteria</p>
                    </div>
                    <div className='principal-container'>
                        {mostrar === true &&
                            <div className='principal-novo'>
                                <h5>Novo item</h5>
                                <div className='principal-novo-adicionar'>
                                    <input type='text' value={novoP} onChange={e => setNovoP(e.target.value)} />
                                    <div className='principal-S'>
                                        <p>R$</p>
                                        <input type='text' value={precoN} onChange={e => setPrecoN(e.target.value)} />
                                    </div>
                                    <button onClick={adicionar}>Adicionar</button>
                                </div>
                            </div>
                        }

                        <div className='principal-lista'>
                            <div className='principal-lista-titulo'>
                                <h5>Lista de Compras
                                    <i className='fa fa-chevron-up' onClick={mostrarMais}></i>
                                </h5>
                                <p>Total: {total} </p>
                            </div>
                        </div>

                        {lista.map(item => <ListaCompras item={item} novoItem={novoItem} />)}
                    </div>
                </div>
            </div>
        </main>
    )
}
