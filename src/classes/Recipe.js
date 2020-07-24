import faker from "Faker";
import config from "../../vue.config"

export default class Recipe {
	getId() {
		return 0;//todo
	}
	setTitle(title) {
		this.title = title;
	}
	getTitle() {
		return this.title;
	}
	static getDummy() {
		let r = new Recipe();
		r.author = `${faker.Name.firstName()} ${faker.Name.lastName()}`;
		let recipeTitle = `${faker.random.catch_phrase_adjective()} ${faker.random.catch_phrase_noun()}`
		r.title = recipeTitle;
		let recipeNo = faker.random.number(4);
		r.image = `${config.publicPath}images/recipes/recipe${recipeNo}.jpg`
		r.uri = recipeTitle.replace(" ", "-").toLowerCase();
		r.description = faker.Lorem.sentences(7);
		r.time = { "totalTime": 30, "prepTime": 25, "cookTime": 45 };
		return r;
	}
}