//yhden rivin kuvaus
export default class Item {
    name = '';
    amount = 0;
    //millainen on yksi rivi, mitä ominaisuuksia sillä on
    
    constructor(name,amount){
        this.name = name;
        this.amount = amount;
    }
}
