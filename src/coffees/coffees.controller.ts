import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
  public create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
