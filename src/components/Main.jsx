import BoxButtons from "./BoxButtons";
import language from "../date/languages"
import BoxText from "./BoxText";
export default function Main() {


    return (
        <main>
            <div className="container">
                {/* parte pulsanti */}
                <BoxButtons Language={language} />
                {/* parte di testo */}
                <BoxText Language={language} />
            </div>

        </main >

    );
}