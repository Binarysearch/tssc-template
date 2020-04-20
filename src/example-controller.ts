import { Post, Controller } from "@piros/tssf";
import { ExampleService } from "./example-service";
import { SomeDto } from "./dtos/some-dto";


@Controller
export class ExampleController {

    constructor(private exampleService: ExampleService){ }

    @Post('/example')
    public async handleRequest(body: SomeDto): Promise<string> {
        return this.exampleService.getMessage(body.name);
    }

}