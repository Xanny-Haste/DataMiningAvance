import React from "react";  
import './css/introduction.css'
export const Collect = () => {
    return (
        <div className="Left">
            <h1 className="Header">V. Collect Data</h1>
            <p className="text">Nous avons créé une base de données "Database_univ" et y avons entré toutes les données d'une source différente</p>
            <h2 className="Title">Ressources Data :</h2>
            <p className="text">ensemble de fichiers Cvs </p>
            <h2 className="Title">La Structure De Base de Donnes "DataBase_univ" :</h2>
            <p className="text"> Il se compose de trois tableaux :</p>
            <h2 className="Title">     Premier tableau :    <p className="text"> table etudiant qui se compose également d'un seul champ  " Id_etudiant ": id_student,region,gender</p></h2>
         
            <h2 className="Title">deuxième tableau <p className="text">table score qui se composé a deux champs "Id_etudiant" et "Score" : credit</p></h2>
            <h2 className="Title"> troisième tableau:<p className="text">table résultant qui se composé par "Id_etudiant" , "id_resulta" , "Resulta final"</p></h2>
            <h2 className="Title">La Collecte de données</h2>
            <p className="text">Pour Collecte Des Donnes Compose a Deux Etapas </p>
            <h2 className="Title">Etape 1 </h2>
            <p className="text"> Nettoyage des données a Cette Etape Faire Nettoyage des données Qui dans Les  fichiers Cvs Utiliseé python Dans le processus  "bibliothèque Pandas et Numpy"</p>
            <h2 className="Title">Etape 2</h2>
            <p className="text">Collecte de données par Talend Dans une base de données partagée,utilisée Tmap pour Transfert Les Donnes Operational a un Datawarehouse  </p>

        </div>
    )
}