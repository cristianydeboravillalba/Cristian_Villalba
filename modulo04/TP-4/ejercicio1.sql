CREATE TABLE ALUMNO
(
  Nombre varchar(30) NOT NULL,
  fecha_nac INT NOT NULL,
  _email varchar(40) NOT NULL,
  dni INT NOT NULL,
  cod_matricula varchar(40)   NOT NULL,
  PRIMARY KEY (dni),
  UNIQUE (cod_matricula)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL,
  nombre varchar(40) NOT NULL,
  dni INT NOT NULL,
  PRIMARY KEY (cod_curso),
  FOREIGN KEY (dni) REFERENCES ALUMNO(dni)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL,
  nombre varchar(40) NOT NULL,
  especialidad INT NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE Realizar
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);