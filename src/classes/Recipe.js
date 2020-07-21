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
		r.title = faker.Lorem.sentence();
		r.image = `${faker.Image.food()}?random=${faker.random.number(100000)}`
		console.log(r.image)
		return r;
	}
}