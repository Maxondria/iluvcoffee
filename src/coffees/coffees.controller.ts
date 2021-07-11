import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}

  @Get()
  public findAll() {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  public create(@Body() body) {
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() body: any) {
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
