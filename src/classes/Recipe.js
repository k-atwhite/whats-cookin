class Recipe {
    constructor(id, imageUrl, ingredients, instructions, name, tags) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions =  instructions;
        this.name = name;
        this.tags = tags;
    }
}

export default Recipe