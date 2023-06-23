CREATE TABLE PAIS
(
  _pais_id INT NOT NULL,
  _nombre_pais varchar(25) NOT NULL,
  PRIMARY KEY (_pais_id)
);

CREATE TABLE PROVINCIA
(
  provincia_id INT NOT NULL,
  _nombre_prov. varchar(30) NOT NULL,
  _pais_id INT,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (_pais_id) REFERENCES PAIS(_pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT NOT NULL,
  nombre varchar(30) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id),
  UNIQUE (codigo_postal)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  nombre varchar(40) NOT NULL,
  _email varchar(30) NOT NULL,
  fecha_alta INT NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad),
  UNIQUE (dni)
);

CREATE TABLE EMPLEADO_telefono
(
  telefono INT NOT NULL,
  empleado_id INT NOT NULL,
  PRIMARY KEY (telefono, empleado_id),
  FOREIGN KEY (empleado_id) REFERENCES EMPLEADO(empleado_id)
);