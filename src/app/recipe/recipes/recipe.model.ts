

export class Recipe {

    public name: string;
    public instructions: string;
    public cuisine: string;
    public imgPath: string;
    public ingredientsList: string[];

    constructor(name: string, instructions: string, cuisine: string, imgPath: string, ingredientsList: string[]) {
        this.name = name;
        this.instructions = instructions;
        this.cuisine = cuisine;
        this.imgPath = imgPath;
        this.ingredientsList = ingredientsList;
    }
}