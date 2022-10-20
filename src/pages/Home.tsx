import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { CreateToDo,EditToDo } from '../components';

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
        {/* EditToDo */}
        <EditToDo/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
