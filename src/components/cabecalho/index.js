import './index.scss';
import logo from '../../assets/images/logo.png';


export default function Cabecalho() {


    return(
        <main className='pagina-cabecalho'>
            <img src={logo} alt='logo'/>
            <p>Portifolio.me</p>
        </main>
    )
}