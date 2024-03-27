export interface Item{
    img: string;
    title: string;
    price: number;
    rate: number;
    category_id: number;
    cell: number;
}

export interface ItemCart{
    img: string;
    title: string;
    price: number;
    rate: number;
    category_id: number;
    cell: number;
    count:number;
}

export const categories: string[] = [
    "Наушники",
    "Беспроводные наушники"
]

export const API_IMAGE = "../assets/images/";

export const items: Item[] = [
    {
        img: "Apple BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 3527,
        rate: 4.7,
        category_id: 0,
        cell: 0.829
    },
    {
        img: "Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0
    },
    {
        img: "Apple EarPods (2).png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0
    },
    {
        img: "Apple BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        category_id: 0,
        cell: 0
    },
    {
        img: "Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0
    },
    {
        img: "Apple EarPods (2).png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0
    },
    {
        img: "Apple AirPods.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        category_id: 1,
        cell: 0
    },
    {
        img: "GERLAX GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        category_id: 1,
        cell: 0
    },
    {
        img: "BOROFONE BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        category_id: 1,
        cell: 0
    }
]

