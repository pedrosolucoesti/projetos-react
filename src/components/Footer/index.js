import "./Footer.css";

export default function Footer() {
  return (
    <footer className="dh-footer">
      <div className="dh-container">
        <div className="dh-brand">
          <h2 className="dh-logo">
            Desenrola <span>Hair</span>
          </h2>
          <p className="dh-tag">
            Liberdade, praticidade e autoestima para seus cachos
          </p>
          <div className="dh-socials" aria-label="Redes sociais Desenrola Hair">
            <a
              href="https://www.instagram.com/desenrollahair"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              {/* Instagram SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@desenrollahair"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              {/* TikTok-like SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7v8a3 3 0 1 0 3 3V9h3V6h-6z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/desenrollehair"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              {/* YouTube SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7.5s-.2-1.7-.8-2.4c-.7-.9-1.5-.9-1.9-1C16.8 4 12 4 12 4s-4.8 0-7.3.1c-.4 0-1.2.1-1.9 1C2.2 5.8 2 7.5 2 7.5S2 9.4 2 11.3v1.3C2 15.6 2 17.5 2 17.5s.2 1.7.8 2.4c.7.9 1.7.9 2.1 1 1.6.2 6.1.2 6.1.2s4.8 0 7.3-.1c.4 0 1.2-.1 1.9-1 .6-.7.8-2.4.8-2.4s0-1.9 0-3.8V11.3c0-1.9 0-3.8 0-3.8z"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path d="M10 14l6-3.2-6-3.2v6.4z" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.desenrollahair.com.br"
              target="_blank"
              rel="noreferrer"
              aria-label="Site oficial"
            >
              {/* Globe SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path d="M2.5 12h19" stroke="currentColor" strokeWidth="1.1" />
                <path
                  d="M12 2.5c2.5 3.5 2.5 8 0 11.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="dh-links">
          <div className="dh-col">
            <h4>Produto</h4>
            <p className="dh-small">
              Shampoo a seco para cabelos cacheados com ingredientes naturais
              que absorvem a oleosidade sem ressecar. Mantém volume, brilho e
              definição entre lavagens.
            </p>
          </div>

          <div className="dh-col">
            <h4>Objetivo</h4>
            <p className="dh-small">
              Proporcionar liberdade, praticidade e autoestima com produtos
              naturais, sustentáveis e que respeitam a textura dos fios.
              Celebramos a diversidade dos cachos brasileiros.
            </p>
          </div>

          <div className="dh-col">
            <h4>Distribuição</h4>
            <ul>
              <li>Vendas online (site oficial e marketplaces)</li>
              <li>Lojas e salões especializados</li>
            </ul>
            <h4>Produção</h4>
            <p className="dh-small">
              Produzido em laboratório sustentável em Governador Mangabeira
              (BA), com extratos botânicos, óleos vegetais e amidos naturais —
              sem sulfatos, parabenos ou silicones. Embalagens biodegradáveis.
            </p>
          </div>
        </div>
      </div>

      <div className="dh-bottom">
        <p>
          © {new Date().getFullYear()} Desenrola Hair — Todos os direitos
          reservados.
        </p>
        <p className="dh-policy-links">
          Site oficial:{" "}
          <a
            href="https://www.desenrollahair.com.br"
            target="_blank"
            rel="noreferrer"
          >
            www.desenrollahair.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
