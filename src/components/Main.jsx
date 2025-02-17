import BoxButtons from "./BoxButtons";
import language from "../date/languages"
export default function Main() {


    return (
        <main>
            <div className="container">
                {/* parte pulsanti */}
                <BoxButtons Language={language} />
                {/* parte di testo */}
                <div className="box-text">

                </div>
            </div>

        </main >

    );
}