import React from "react";

export default function UserCard({ name, email, city }) {
  return (
    <article className="card">
      <h2 className="title">{name}</h2>
      <p className="meta">
        <strong>Correo:</strong> {email}
      </p>
      <p className="meta">
        <strong>Ciudad:</strong> {city}
      </p>
    </article>
  );
}
