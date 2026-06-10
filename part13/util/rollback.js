import { rollbackMigrations } from "./db.js";

rollbackMigrations().then(() => console.debug("Finished rollback"));
