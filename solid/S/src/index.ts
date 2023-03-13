import Client from "./utils/Client";
import Notify from "./utils/Notify";

const client = new Client();
client.email = 'pedrohlucena413@gmail.com'

const notify = new Notify(client);

notify.send()