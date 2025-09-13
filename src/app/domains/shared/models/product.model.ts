import { Category } from "./Category";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    creationAt: string;
    description: string;
    category: Category;
}