import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";


export default function App() {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /**Implementaciòn del punto #1 
   * peticion a la API de usuarios
   * dentro de un useEffect
   * con un AbortController para cancelar la peticiòn
   * si el componente se desmonta antes de que finalice.
   */
  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") setError("Error al cargar usuarios.");
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  /**Implementaciòn del punto #6
   * mostrar cargando... mientras carga la API
   * Mostrar un mensaje de error si falla la peticiòn
   */

  const term = q.trim().toLowerCase();
  const filtered = term
    ? users.filter((u) => (u.name || "").toLowerCase().includes(term))
    : users;

  if (loading)
    return (
      <p className="status" role="status" aria-live="polite">
        Cargando...
      </p>
    );

  if (error)
    return (
      <p className="status error" role="alert">
        {error}
      </p>
    );


 // retorno e implementación de la barra de búsqueda y el filtrado de usuarios   

  return (
    <main className="container">
      <div className="header">
        <h1>Prueba Técnica - Jhon Byron Quiroz Perez</h1>
        <img src="https://offcorss.vtexassets.com/arquivos/header__logo-offcorss.png" alt="" />
      </div>
      
      

      <label htmlFor="search" className="sr-only">
        Buscar por nombre
      </label>
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Buscar por nombre..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        autoFocus
        aria-label="Buscar usuarios por nombre"
      />

      {filtered.length === 0 ? (
        <p className="status">No hay resultados.</p>
      ) : (
        <section className="grid">
          {filtered.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              email={u.email}
              city={u.address?.city ?? ""}
            />
          ))}
        </section>
      )}
    </main>
  );

  
}