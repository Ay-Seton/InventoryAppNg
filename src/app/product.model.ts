export class Product{
    constructor(
        public SKU:string,
        public name:string,
        public imageUrl:string,
        public department: string[],
        public price: number,){

    }
}