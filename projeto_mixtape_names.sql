create database mixtape_names;

USE mixtape_names;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
create table quiz(
idQuiz int primary key auto_increment,
pontosAcertos int,
fkusuario int,
foreign key (fkusuario) references usuario(id)
);


insert into usuario
value( 1, 'pablo', 'pablo@gmail.com','123456'); 

select * from usuario;

truncate usuario;

