import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CreateToDo from '../components/CreateToDo/CreateToDo';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CreateToDo/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
