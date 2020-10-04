export enum Cuisine {
    Asian = "asian",
    German = "german",
    French = "french",
    Italian = "italian",
    American = "american",
    Latin = "latin",
    Other = "other"
}

export class Recipe {

    public name: string;
    public instructions: string;
    public cuisine: Cuisine;
    public imgPath: string;
    public ingredientsList: Map<String, number>;

    constructor(name: string, instructions: string, cuisine: Cuisine, imgPath: string, ingredientsList: Map<String, number>) {
        this.name = name;
        this.instructions = instructions;
        this.cuisine = cuisine;
        this.imgPath = imgPath;
        this.ingredientsList = ingredientsList;
    }
}