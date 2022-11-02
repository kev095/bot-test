import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export class ServerWeb {

    app: Express = express();
    port: any;

    constructor(){
        this.port = process.env.PORT;
    }

    init(){
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Express + TypeScript Server');
          });

        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running 🚀 at https://localhost:${this.port}`);
          });
    }
}
