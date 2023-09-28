import app from './app'
import { testConnection } from './testDatabase';

require("dotenv").config();

app.listen(process.env.PORT_SERVER, () => {
    console.log(`server running on port ${process.env.PORT_SERVER}`);
    testConnection();
});