export interface Product {

    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    }

}
export type Cart = {
    id:number
    quantity:number
}

export type FavouriteProduct = {
    id:number
    title:string
    image:string
    price:number
}

export type RegisterUserType = {
    name:string
    phone:string
}

export type LoginUserType = {
    phone:string
}

export type VerifyCodeUserType = {
    code:string
}