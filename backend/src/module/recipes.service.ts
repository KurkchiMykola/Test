import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;

@Injectable()
export class RecipesService {
  async getRecipes(search: string = '') {
    try {
      const response = await axios.get(`${API_URL}/search.php?s=${search}`);
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching recipes', HttpStatus.BAD_REQUEST);
    }
  }

  async getRecipeDetails(id: string) {
    try {
      const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching recipe details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
