import Button from "./Button"
export default function BoxButtons(props) {

    // Ricevi le props dal padre
    const { Languages, activeButton, onToggle } = props;


    return (
        < section className="box-btn" >
            <ul>

                {Languages.map(language => (
                    <Button
                        key={language.id}
                        title={language.title}
                        // Passa la funzione dal padre
                        onToggle={() => onToggle(language.id)}
                        // Passa lo stato dal padre
                        isActive={activeButton === language.id}
                    />
                ))}
            </ul>
        </section >
    )
}




