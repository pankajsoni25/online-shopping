export class Product {
    id: number;
    name: string;
    company: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}