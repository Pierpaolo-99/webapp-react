export default function Footer() {

    return (
        <>
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-2">&copy; {new Date().getFullYear()} MovieMania. Tutti i diritti riservati.</p>
                    <div className="mb-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <i className="bi bi-facebook"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <i className="bi bi-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                    </div>
                    <div>
                        <a href="/about" className="text-white mx-2">Chi siamo</a>
                        <a href="/contact" className="text-white mx-2">Contatti</a>
                        <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    )
}