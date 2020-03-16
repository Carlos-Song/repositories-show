import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAuthDto } from '../model/create_auth.dto';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getToken(@Body() createAuth: CreateAuthDto){

    let access_token = "";
    axios.post('https://github.com/login/oauth/access_token',
        {code: createAuth.code, client_id: createAuth.client_id, client_secret: createAuth.client_secret})
      .then(function (response) {
        console.log(response);
        // access_token = querystring.parse(response.data).access_token
        // response.json({
        //   access_token: access_token
        // })
      })
  
    return "";
  }
}
