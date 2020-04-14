export class Producto {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    availability: string;
    originalID: string;

    constructor(id, name, description, price, category, availability, original) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.category = category
        this.availability = availability
        this.originalID = original
    }
}