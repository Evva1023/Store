import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Render("index")
  index() {
    const viewData = [];
    viewData["title"] = "Always Fresh";
    return {
      viewData: viewData
    };
  }

  @Get("/about")
  @Render("about")
  about() {
    const viewData = [];
    viewData["description"] = "This is our about page";
    viewData["title"] = "We Care - We Deliver Fast And Fresh";
    return {
      viewData: viewData
    };
  }
}
