import { Controller, Get, Param, Delete, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll() :Movie[]{
    return this.moviesService.getAll();
  }

  @Get("search")
  search(@Query('year') seachingYear: string){
    return `We are searching for a movie with a title: ${seachingYear}`;
  }

  @Get("/:id")
  getOne(@Param("id") movieId: number) :Movie{
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto){ 
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId:number){
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }

}
