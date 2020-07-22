import faker from "Faker";

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
		r.title = `${faker.random.catch_phrase_adjective()} ${faker.random.catch_phrase_noun()}`;
		let recipeNo = faker.random.number(4);
		r.image = `images/recipes/recipe${recipeNo}.jpg`
		console.log(r.image)
		return r;
	}
}