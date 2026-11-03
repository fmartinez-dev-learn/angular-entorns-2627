//dades de prova

export interface ProducteLab {
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeURL: string;
}

export const PRODUCTES_LAB: ProducteLab[] = [
    {
        id: 1,
        nom: 'Portatil MacBook 21',
        preu: 899,
        estoc: 3,
        categoria: 'Informatica',
        imatgeURL: 'https://picsum.photos/200/300'
    },
    {
        id: 2,
        nom: 'Mouse Logitech',
        preu: 24.9,
        estoc: 15,
        categoria: 'Periferics',
        imatgeURL: 'https://picsum.photos/200/300'
    },
    {
        id: 3,
        nom: 'Monitor Omen',
        preu: 329,
        estoc: 0,
        categoria: 'Pantalles',
        imatgeURL: 'https://picsum.photos/200/300'
    },
    {
        id: 4,
        nom: 'Teclat Corsair',
        preu: 79,
        estoc: 8,
        categoria: 'Periferics',
        imatgeURL: 'https://picsum.photos/200/300'
    },
    {
        id: 5,
        nom: 'Auriculars',
        preu: 45,
        estoc: 0,
        categoria: 'Periferics',
        imatgeURL: 'https://picsum.photos/200/300'
    }
]