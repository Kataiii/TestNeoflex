export interface Item{
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number;
    category_id: number;
    cell: number;
    all_count: number;
}

export interface ItemCart{
    id: number;
    img: string;
    title: string;
    price: number;
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
        id: 1,
        img: "Apple BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 3527,
        rate: 4.7,
        category_id: 0,
        cell: 0.829,
        all_count: 10
    },
    {
        id: 2,
        img: "Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0,
        all_count: 12
    },
    {
        id: 3,
        img: "Apple EarPods (2).png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0,
        all_count:8
    },
    {
        id: 4,
        img: "Apple BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        category_id: 0,
        cell: 0,
        all_count:10
    },
    {
        id: 5,
        img: "Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0,
        all_count:5
    },
    {
        id: 6,
        img: "Apple EarPods (2).png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        category_id: 0,
        cell: 0,
        all_count: 8
    },
    {
        id: 7,
        img: "Apple AirPods.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        category_id: 1,
        cell: 0,
        all_count: 7
    },
    {
        id: 8,
        img: "GERLAX GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        category_id: 1,
        cell: 0,
        all_count: 10
    },
    {
        id: 9,
        img: "BOROFONE BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        category_id: 1,
        cell: 0,
        all_count: 8
    }
]

