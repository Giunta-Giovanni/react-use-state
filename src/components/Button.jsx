
export default function Button(props) {
    return (
        <li>
            <button type="button" className={`btn  ${props.isActive ? 'btn-warning' : 'btn-primary'}`} onClick={props.onToggle}>{props.title}</button>
        </li >
    )
}