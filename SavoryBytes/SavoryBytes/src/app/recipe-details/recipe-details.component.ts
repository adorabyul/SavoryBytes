import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],

})
export class RecipeDetailsComponent implements OnInit {

  recipe = {
    label: "",
    ingredientLines: [],
    image: "",
    mealType: "",
    url: "",
    source: ""
  };
  id = "";
  urlConfig = "https://api.edamam.com/api/recipes/v2?type=public";

  constructor(private recipeService:RecipeService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];

      this.recipeService.getRecipe(this.id).subscribe(result => {
        this.recipe = result.recipe;
        console.log(result)
        this.recipe.mealType = result.recipe.mealType;
        return this.recipe;
      })
    });
  }


}
