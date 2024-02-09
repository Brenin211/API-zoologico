import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';
import { Habitat } from './model/Habitat';

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
   let ave: Ave= new Ave(10, 'Calopsita', 11, 'Masculino');
   let reptil: Reptil= new Reptil ('placóides', 'Cobra', 15, 'Masculino');
   let mamifero: Mamifero= new Mamifero ('canguru', 'Julia', 12, 'Feminino');

    res.json([ave,reptil, mamifero]);
});

server.post('/habitat', (req, res) => {
    const {nome, animais}= req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat)
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const {nome, habitat}= req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao)
    res.status(200).json('Atrção criada');
});

server.post('/zoologico', (req, res) => {
    const {nome, atracao}= req.body;
    const zoo = new Zoologico (nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado');
});

server.post('/cadastrarAve', (req, res) => {
    const { envergadura, nome, idade, genero } = req.body;

    let novaAve = new Ave(envergadura, nome, idade, genero);
    res.json(["Nova ave cadastrada: ", novaAve]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localpost:${port}`);
})