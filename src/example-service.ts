import { Injectable } from "@piros/tssf";


@Injectable
export class ExampleService {

    constructor() {
        
    }

    public getMessage(name: string) {
        return 'Hello ' + name;
    }
}