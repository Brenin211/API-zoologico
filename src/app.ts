import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Animal } from './model/Animal';

const server = express();
const port = 3000

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave(90, 'Pinto', 4, 'Feminino'); 
    let mamifero: Mamifero = new Mamifero('Border Collie', 'Burder', 2, 'Masculino');
    let reptil: Reptil = new Reptil('Ganoide', 'Romeu', 17, 'Masculino');
    res.json([ave, mamifero, reptil]);
})

server.post('/cadastrarAve', (req, res) => {
    const { envergadura, nome, idade, genero } = req.body;

    let novaAve = new Ave(envergadura, nome, idade, genero);
    res.json(["Nova ave cadastrada: ", novaAve]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localpost:${port}`);
})