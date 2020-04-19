import { Injectable } from "@piros/tssf";
import { Te } from "./te";


@Injectable
export class Ta {

    constructor(private te: Te) {
        
    }

    saySomething(){
        console.log('Soy Ta');
        console.log('Te dice: ');
        this.te.saySomething();
    }
}