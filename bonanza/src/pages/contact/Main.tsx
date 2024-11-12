import "./Main.scss";

export default function Main() {
    return (
        <section className="main-part">
            <h1>Kontakt</h1>
            <p>Imate pitanja vezana apartmane i rezervaciju njih? Popunite formu ispod i odgovorićemo Vam u što kraćem roku.</p>
            <div className="form">
                <div className="field">
                    <input type="text" placeholder="Ime*" />
                </div>
                <div className="field">
                    <input type="email" placeholder="Email*" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Naslov*" />
                </div>
                <div className="field">
                    <textarea placeholder="Poruka*" rows={3}></textarea>
                </div>
                <div className="button-div">
                    <button className="btn btn-green">
                        Pošalji
                    </button>
                </div>
            </div>
        </section>
    );
}