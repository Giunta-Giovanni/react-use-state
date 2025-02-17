import { useState } from "react";
import BoxButtons from "./BoxButtons";
import language from "../date/languages"
import BoxText from "./BoxText";
export default function Main() {

    // destructuring in useState
    const [activeButton, setActiveButton] = useState(null)

    // Funzione per aggiornare il bottone attivo
    const handleToggle = (id) => {
        setActiveButton(id);
    };

    return (
        <main>
            <div className="container">
                {/* parte pulsanti */}
                <BoxButtons
                    Languages={language}
                    activeButton={activeButton}
                    onToggle={handleToggle} />
                {/* parte di testo */}
                <BoxText Language={language}
                    activeButton={activeButton}
                />
            </div>

        </main >

    );
}