import React from "react";
import { Button } from "react-bootstrap";
export default function MapaEstudio() {
  const direccion =
    "Pje. 2 de Abril 337, San Miguel de Tucumán, Tucumán, Argentina";

  const urlComoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    direccion
  )}`;

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Dónde estamos</h2>

      <div style={styles.mapContainer}>
        <iframe
          title="Ubicación del Estudio Jurídico"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.0335971245959!2d-65.20603993037987!3d-26.83567760186882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0f00552f01%3A0x120874e002d9be6e!2sPje.%202%20de%20Abril%20337%2C%20T4000IGA%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1771880275143!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div style={styles.info}>
        <p style={styles.address}>{direccion}</p>
<Button
  href={urlComoLlegar}
  target="_blank"
  rel="noopener noreferrer"
  className="gradient-button"
>
  Cómo llegar
</Button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  
  mapContainer: {
    width: "100%",
    maxWidth: "900px",
    height: "400px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  info: {
    marginTop: "20px",
  },
  address: {
    marginBottom: "12px",
   
  },


};