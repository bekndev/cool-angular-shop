export interface Product {
    id: number;
    title: string;
    body: string;
    category: string;
    price?: string;
    variations?: object;
}