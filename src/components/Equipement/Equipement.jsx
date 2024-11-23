import Collapse from "../../components/Collapse/Collapse";
import backData from "../../data/back-data.json";
import '../../styles/Collapse.scss';


function Equipements({ lodgingId }) {
  // Filtrer les données pour trouver le logement correspondant à l'ID spécifié
  const lodging = backData.find((lodging) => lodging.id === lodgingId);

  if (!lodging) {
    return <div>Logement non trouvé</div>;
  }

  // Convertir les équipements en éléments <li>
  const equipementsList = lodging.equipments.map((equipements, index) => (
    <li key={index}>{equipements}</li>
  ));

  return (
    <div>
      <Collapse
        title="Equipements" // Titre de la collapse
        content={<ul>{equipementsList}</ul>} // Liste des équipements dans des éléments <li>
      />
    </div>
  );
}

export default Equipements;