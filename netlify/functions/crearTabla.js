import { neon } from '@netlify/neon';

export async function handler() {
  const sql = neon();

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS mensajes (
        id SERIAL PRIMARY KEY,
        nombre TEXT,
        correo TEXT,
        mensaje TEXT,
        fecha TIMESTAMP DEFAULT NOW()
      );
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Tabla creada correctamente" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
