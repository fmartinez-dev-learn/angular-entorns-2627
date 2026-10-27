// model i dades de prova per la sessió 7 - PROPERTY BINDINGS

export interface ProducteLab{
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeUrl: string;
}

export const PRODUCTES_LAB: ProducteLab[] = [
    { id: 1,
        nom: 'Portàtil ProBook 14', 
        preu: 899,
        estoc: 3,
        categoria: 'Informàtica',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'
    },
    {
        id: 2,
        nom: 'Ratolí sense fil', 
        preu: 24.9,
        estoc: 15,
        categoria: 'Perifèrics',
        imatgeUrl: 'https://fastly.picsum.photos/id/306/300/180.jpg?hmac=RBhyqDZG2GCY0v9PbRyXZkZMMlOKQZH8qmlih1zGy1c'
    },
    { id: 3,
        nom: 'Monitor 27', 
        preu: 329,
        estoc: 0,
        categoria: 'Pantalles',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'
    },
    { id: 4,
        nom: 'Teclat', 
        preu: 79,
        estoc: 8,
        categoria: 'Perifèrics',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'
    },
    { id: 5,
        nom: 'Auriculars', 
        preu: 45,
        estoc: 0,
        categoria: 'Àudio',
        imatgeUrl: ''
    },
]