import { Pool } from "pg";

export const testConnection = async () => {
    // connect with databse
    const pool = new Pool({
        user:`${process.env.POSTGRES_USER}`,
        host:`localhost`,
        database:`${process.env.DB_NAME}`,
        password:`${process.env.POSTGRES_PASSWORD}`,
        port:5432,
    });
    try {
        // Use a dummy query to test the connection
        const client = await pool.connect();
        console.log('Connected to the database successfully.');
        client.release(); // Release the client back to the pool
    
        // Close the connection pool when done
        pool.end();
      } catch (error:any) {
        console.error('Error connecting to the database:', error.message);
      }
}