export type Guitar = {
    id:number
    name:string
    image:string
    description:string
    price:number
  }

/*
export type CartItem = Guitar & {
    quantity : number
} 
*/
export interface CartItem extends Guitar {
    quantity : number
}


export type GuitarID = Guitar['id'] //para un solo elemento

/*export type GuitarID = Pick<Guitar, 'id'> {
    id: number
}*/

/* Utility Types
export type CartItem = Pick<Guitar , 'id' | 'name' | 'price'> & {
    quantity: number
}
 export type CartItem = Omit<Guitar , 'id' | 'name' | 'price'> & {
    quantity: number
}
       */