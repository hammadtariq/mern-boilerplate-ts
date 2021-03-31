import App from "./src/app";
import CalculateController from "./src/controllers/Calculate";

const port = process.env.PORT || 5000;
const app = new App([new CalculateController()], port);

app.listen();
