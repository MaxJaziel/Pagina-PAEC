import { neon } from '@netlify/neon';

export async function handler(event) {
  const sql = neon();

  const { nombre, correo, comentario } = JSON.parse(event.body);

  try {
    await sql`
      INSERT INTO mensajes (nombre, correo, mensaje)
      VALUES (${nombre}, ${correo}, ${comentario});
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Guardado correctamente" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
