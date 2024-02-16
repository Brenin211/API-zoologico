CREATE TABLE reptil(id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					tipo_de_escamas VARCHAR(10)); 

CREATE TABLE mamifero(id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					raca VARCHAR(30)); 
					
CREATE TABLE ave(id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					envergadura FLOAT); 
					
INSERT INTO mamifero(nome, idade, genero, raca)
	VALUES 
('Simba', 2, 'Macho', 'Leão'),
('Timão', 1, 'Macho', 'Suricato'),
('Pumba', 10, 'Macho', 'Javali'),
('Nala', 3, 'Femea', 'Leoa');

INSERT INTO ave(nome, idade, genero, envergadura)
	VALUES 
('Zazu', 3, 'Fêmea', 20),
('Iago', 5, 'Macho', 30),
('Scuttle', 2, 'Macho', 40);

INSERT INTO reptil(nome, idade, genero, tipo_de_escamas)
	VALUES 
('Pascal', 4, 'Macho', 'Dérmicas'),
('Timão', 1, 'Macho', 'Escudos'),
('Pumba', 10, 'Macho', 'Quilíferas');


--SELECT * FROM mamifero;
--SELECT * FROM ave;
--SELECT * FROM reptil;

INSERT INTO reptil(nome, idade, genero, tipo_de_escamas)
	VALUES 
('dhaemdahedja', 188, 'jnbnmnbvvcf', 'lmkj');

SELECT * FROM reptil;

DELETE FROM reptil WHERE  id=7;
