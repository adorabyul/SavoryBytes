import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { RecipeService } from '../recipes/recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'SavoryBytes';

  button: HTMLElement | null | undefined;

  searchquery = "";
  allRecipies: any;
  filters = "";



  constructor(private recipeService:RecipeService, private userService: UserService){
    
  }


  getRecipes(){
    this.recipeService.getRecipes(this.searchquery, this.filters).subscribe(result => {
      let recipies = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        recipe.id = recipe.selfref.slice(38, 70);
        return recipe;
      })
      this.allRecipies = recipies;
    })
  }

  addFilter(filter: string) {
    this.button = document.getElementById(filter);
    console.log(this.button);

    if(this.filters.includes(filter) == false){
      this.filters += filter;
      if(this.button != null)
    {
      this.button.style.backgroundColor = "#FFA500";
    }
    }
    else {
      console.log(this.filters)
        this.filters = this.filters.replaceAll(filter, "");
        console.log(this.filters)
      if(this.button != null)
      {
      this.button.style.backgroundColor = "white";
      }
    }
    
    
    
   
  }




}
