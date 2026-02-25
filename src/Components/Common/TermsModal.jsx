import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function TermsModal({ open, onClose, title = "Términos y Condiciones", children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="termsModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="termsModalTitle"
      onMouseDown={(e) => {
        // click en el fondo oscuro => cerrar
        if (e.target.classList.contains("termsModal")) onClose();
      }}
    >
      <div className="termsModal__dialog">
        <div className="termsModal__header">
          <h2 id="termsModalTitle" className="termsModal__title">{title}</h2>

          <button
            type="button"
            className="termsModal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="termsModal__body">
          {children}
        </div>

        <div className="termsModal__footer">
          <button type="button" className="termsModal__btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}