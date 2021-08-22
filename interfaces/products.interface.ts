export interface IProducts {
    productName :string,
    productTotal :number,
    productPriceList :IPriceList
}

export interface IPriceList {
    size : string | number,
    price : string | number
}

