import { Animal } from "./Animal";

export class Ave extends Animal{
    static push(novaAve: Ave) {
        throw new Error("Method not implemented.");
    }
    private envergadura: number;

    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    public getEnvergdura(): number {
        return this.envergadura;
    }
    
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }

}