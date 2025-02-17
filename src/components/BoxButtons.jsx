import { useState } from "react";
import Button from "./Button"
export default function BoxButtons(props) {

    // salvo la props con una variabile
    const languages = props.Language;

    // destructuring in useState
    const [activeButton, setActiveButton] = useState(null)


    console.log(languages)

    return (
        < section className="box-btn" >
            <ul>

                {languages.map(language => (
                    <Button
                        key={language.id}
                        title={language.title}
                        onToggle={() => setActiveButton(language.id)}
                        isActive={activeButton === language.id}
                    />
                ))}
            </ul>
        </section >
    )
}




