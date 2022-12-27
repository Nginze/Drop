import pg from "pg";

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "guuk12jona",
  database: "Social-Audio"
});

try {
  client.connect();
} catch (err) {
  console.log(err);
}
