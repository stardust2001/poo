class Book{
    #tittle;
    #author;
    #price;
    #stock;
    #id;

    constructor(tittle,author,price,stock,id){
       this.#tittle=tittle
       this.#author=author
       this.#price=price
       this.#stock=stock
       this.#id=id
    }

    getInfo(){
        let info=`Titulo: ${this.#tittle}, Autor: ${ this.#author}, Precio:${ this.#price }, Stock${this.#stock}, id${this.#id}`;
    console.log(info);
    if (this.#stock>0){
        info +=`Existencias: ${this.#stock}`
    }else{
        info+=`No disponible`;
    }
    }

get tittle(){
    return this.#tittle
}

set tittle(new_title){
    this.#tittle=new_title
}

}

class comic extends Book{
    #ilustractor
    #vol
    constructor(tittle,author,price,stock,id, ilustractor, vol){
        super(tittle,author,price,stock,id)
        this.#ilustractor=ilustractor
        this.#vol=vol
    }

    getInfo(){
        let info=`Ilustracion: ${this.#ilustractor}, Volumen: ${ this.#vol}`;
        super.getInfo();
        console.log(info)

    }

}
const book1=new Book('caballo', 'slene', 25, 12, 1);
const comic1=new comic('caballo', 'slene', 25, 12, 1,['uno','dos', 'tres'],5);

console.log(book1.getInfo());
console.log(comic1.getInfo());
