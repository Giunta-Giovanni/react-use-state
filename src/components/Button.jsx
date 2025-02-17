
export default function Button(props) {
    return (
        <li>
            <button type="button" className="btn btn-primary">{props.title}</button>
        </li>
    )
}