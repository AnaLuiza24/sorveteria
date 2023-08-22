import './index.scss';

export default function ListaCompras(props) {

    return (
        <main className='pagina-listacompras'>
            <div className='principal-tabela'>
                <span>
                    <p>{props.item.produto}</p>
                    <p> R$ {props.item.preco}</p>
                    <i className='fa fa-trash-can' onClick={() => props.novoItem(props.item)}></i>
                </span>
            </div>
        </main>
    )
}