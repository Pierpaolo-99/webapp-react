export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-5">
                <div className="container">

                    <div className="row mb-4">
                        <div className="col-md-6 text-center text-md-start">
                            <h5 className="fw-bold">MovieHub</h5>
                            <p className="text-muted">
                                Scopri il mondo del cinema con noi! Rimani aggiornato sui tuoi film preferiti.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                <i className="bi bi-twitter fs-4"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                        </div>
                    </div>

                    <div className="row text-center text-md-start">
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">Informazioni</h6>
                            <ul className="list-unstyled">
                                <li><a href="/about" className="text-white text-decoration-none">Chi siamo</a></li>
                                <li><a href="/contact" className="text-white text-decoration-none">Contatti</a></li>
                                <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">Risorse</h6>
                            <ul className="list-unstyled">
                                <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
                                <li><a href="/support" className="text-white text-decoration-none">Supporto</a></li>
                                <li><a href="/terms" className="text-white text-decoration-none">Termini e Condizioni</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">Seguici</h6>
                            <p className="text-white">Rimani connesso sui nostri social per le ultime novità!</p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="mb-0 text-white">
                            &copy; {new Date().getFullYear()} MovieHub. Tutti i diritti riservati.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}