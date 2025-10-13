import axios from "axios";
import { useState, useEffect } from "react";

const ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT ||
  import.meta.env.VITE_FORM_ENDOPOINT; // fallback si tu .env tenía ese nombre

const initialState = {
  nombres: "",
  apellidos: "",
  empresa: "",
  telefono: "",
  email: "",
  servicio: "Landing Page",
  descripcion: "",
  acepta_politica: false, // ahora opcional
  page_url: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | "no-endpoint" | null

  useEffect(() => {
    setFormData((p) => ({ ...p, page_url: window.location.href }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!ENDPOINT) {
      console.error("VITE_FORM_ENDPOINT no está definido en el .env");
      setStatus("no-endpoint");
      return;
    }

    // Solo estos 4 son obligatorios
    const { nombres, apellidos, telefono, descripcion } = formData;
    if (!nombres || !apellidos || !telefono || !descripcion) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      await axios.post(ENDPOINT, formData, {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      setStatus("ok");
      setFormData({ ...initialState, page_url: window.location.href });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h3 className="text-6xl font-bold mb-4">Contacta con nosotros</h3>
      <p className="text-slate-400 text-xl mb-8">
        Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-[#1e293b] p-8 rounded-xl border border-[#334155] text-left">
        {/* Nombres y Apellidos (obligatorios) */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nombres"
            placeholder="Nombres*"
            value={formData.nombres}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos*"
            value={formData.apellidos}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
          />
        </div>

        {/* Empresa (opcional) y Teléfono (obligatorio) */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa (opcional)"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono (Perú) 9 dígitos*"
            inputMode="numeric"
            pattern="[0-9]{9}"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
          />
        </div>

        {/* Email (opcional) */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico (opcional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
        />

        {/* Servicio (opcional) */}
        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
        >
          <option>Landing Page</option>
          <option>Sitio Web Corporativo</option>
          <option>Tienda E-commerce</option>
          <option>SEO / Posicionamiento</option>
          <option>Branding / Logo</option>
          <option>App Móvil</option>
          <option>Otro</option>
        </select>

        {/* Descripción (obligatoria) */}
        <textarea
          name="descripcion"
          placeholder="Cuéntanos sobre tu proyecto* (objetivo, referencias, funcionalidades)"
          rows={5}
          value={formData.descripcion}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"
        />

        {/* Política (opcional) + URL de página */}
        <input type="hidden" name="page_url" value={formData.page_url} readOnly />
        <label className="flex items-center gap-3 text-slate-300 text-sm">
          <input
            type="checkbox"
            name="acepta_politica"
            checked={formData.acepta_politica}
            onChange={handleChange}
            className="w-4 h-4"
          />
          Acepto ser contactado por Digital Andes y la política de privacidad.
        </label>

        {/* Estados */}
        {status === "ok" && <div className="text-green-400 text-sm">¡Gracias! Recibimos tu mensaje.</div>}
        {status === "error" && (
          <div className="text-red-400 text-sm">
            Completa Nombres, Apellidos, Teléfono y Descripción para continuar.
          </div>
        )}
        {status === "no-endpoint" && (
          <div className="text-yellow-300 text-sm">
            Configura <strong>VITE_FORM_ENDPOINT</strong> en tu <code>.env</code>.
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 py-3 rounded-lg font-semibold text-white"
        >
          {loading ? "Enviando..." : "Enviar mensaje ✈️"}
        </button>
      </form>
    </section>
  );
}
