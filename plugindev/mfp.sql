CREATE TABLE wp_mfp_formulaire(
   Id_formulaire INT AUTO_INCREMENT,
   id_categorie INT,
   PRIMARY KEY(Id_formulaire)
);

CREATE TABLE wp_mfp_input(
   Id_input INT AUTO_INCREMENT,
   Type VARCHAR(250) ,
   PRIMARY KEY(Id_input)
);

CREATE TABLE wp_mfp_champs(
   Id_champs INT AUTO_INCREMENT,
   nom_champs VARCHAR(250) ,
   input_id INT,
   Id_input INT NOT NULL,
   PRIMARY KEY(Id_champs),
   FOREIGN KEY(Id_input) REFERENCES wp_mfp_input(Id_input)
);

CREATE TABLE wp_mfp_liaison(
   Id_champs INT,
   Id_liaison INT AUTO_INCREMENT,
   id_formulaire INT,
   id_champ INT,
   PRIMARY KEY(Id_champs, Id_liaison),
   FOREIGN KEY(Id_champs) REFERENCES wp_mfp_champs(Id_champs)
);

CREATE TABLE wp_mfp_correspond(
   Id_formulaire INT,
   Id_champs INT,
   Id_liaison INT,
   PRIMARY KEY(Id_formulaire, Id_champs, Id_liaison),
   FOREIGN KEY(Id_formulaire) REFERENCES wp_mfp_formulaire(Id_formulaire),
   FOREIGN KEY(Id_champs, Id_liaison) REFERENCES wp_mfp_liaison(Id_champs, Id_liaison)
);
