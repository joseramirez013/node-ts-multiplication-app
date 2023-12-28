// import { option } from "yargs";
import fs from 'fs';



export interface SaveFileUseCase {
    
    execute: ( options: Options ) => boolean;

}

export interface Options {
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(
        /**
         * DI - Dependency injection
         * repository: StorageRepository
         */

    ){}

    execute({ 
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table'
    }: Options): boolean {

        try {
            fs.mkdirSync( fileDestination, { recursive: true });
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);
            // console.log('File creaded!');
            return true;
        } catch (error) {
            console.error( error );
            return false;
            
        }


    }

}
