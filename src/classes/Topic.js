import faker from "Faker";
import config from "../../vue.config"

export default class Topic {
	static getDummy() {
		let r = new Topic();
		let title = `${faker.random.catch_phrase_adjective()} ${faker.random.catch_phrase_noun()}`
		r.title = title;
		let id = faker.random.number(4);
		r.image = `${config.publicPath}images/topics/${id}.jpg`
		r.uri = title.replace(" ", "-").toLowerCase();
		r.description = faker.Lorem.sentences(7);
		return r;
	}
}