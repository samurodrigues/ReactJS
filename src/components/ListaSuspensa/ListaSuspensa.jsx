import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className='lista-suspensa'>
            <label>{ props.label }</label>
            <select 
                value={props.valor}
                required={props.obrigatorio}
                onChange={aoDigitado}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;