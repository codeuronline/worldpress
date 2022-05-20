<?php require_once 'Database.php';
$connexion= new Database;
$connexion->getPDO();
$input_type = ["int","float","number","textearea","date","color","email","checkbox","color","date-time","file","image","month","password","radio","range","search","tel","text","time","url","week"];
foreach ($input_type as $value){
$sql="INSERT INTO wp_mfp_input(Type) VALUES(?)";
$connexion->getPDO->bindParam
}
?>