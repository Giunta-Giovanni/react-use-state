export default function BoxText(props) {
    const { Language, activeButton } = props;

    const lingua = Language.find(lingua => { return lingua.id === activeButton })
    console.log(lingua)

    return (
        < section className="box-text" >
            <h2>{lingua ? lingua.title : "Non Hai selezionato nessuna lingua"}</h2>
            <p>{lingua ? lingua.description : "Formica"}</p>
        </section >
    )
}

