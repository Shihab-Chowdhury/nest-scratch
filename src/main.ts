import { Controller, Module, Get } from "@nestjs/common";

//decorator
@Controller()
class AppController{
    @Get()
    getRootRoute() {
        return 'hi there!';
    }
}