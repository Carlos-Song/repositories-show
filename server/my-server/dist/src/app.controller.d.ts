import { AppService } from './app.service';
import { CreateAuthDto } from '../model/create_auth.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getToken(createAuth: CreateAuthDto): string;
}
