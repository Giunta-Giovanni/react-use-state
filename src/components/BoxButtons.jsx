
import Button from "./Button"
export default function BoxButtons(props) {
    const languages = props.Language

    console.log(languages)

    return (
        < section className="box-btn" >
            <ul>

                {languages.map(language => (
                    <Button
                        key={language.id}
                        title={language.title}
                    />
                ))}
            </ul>
        </section >
    )
}




