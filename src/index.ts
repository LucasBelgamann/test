import * as express from 'express';
import routesLogin from './database/routes/routesLogin';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/login', routesLogin);
  }

  private routes(): void {
      this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello World!');
    });
  }

  public start(): void {
    this.app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
  }
}

const app = new App();
app.start();
