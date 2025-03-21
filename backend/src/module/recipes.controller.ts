import { Controller, Get, Query, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Query('s') search: string) {
    return this.recipesService.getRecipes(search);
  }

  @Get(':id')
  async getRecipeDetails(@Param('id') id: string) {
    return this.recipesService.getRecipeDetails(id);
  }
}
