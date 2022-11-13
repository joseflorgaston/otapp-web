export { CarCard };

declare global {
    type SomeType = [boolean, string, number];

    interface CarCard {
        id: number,
        images: string[],
        name: string,
        price: number,
        currency: string,
        author: string,
        isFavorite: boolean
    }
}