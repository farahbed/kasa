import Collapse from "../../components/Collapse/Collapse";
import backData from "../../data/back-data.json";
import '../../styles/Collapse.scss';



function Description({ lodgingId }) {
  // Filtrer les données pour trouver le logement correspondant à l'ID spécifié
  const lodging = backData.find((lodging) => lodging.id === lodgingId);

  if (!lodging) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <Collapse
        title="Description" // Titre de la collapse
        content={lodging.description} // Description du logement correspondant à l'ID
      />
    </div>
  );
}

export default Description;