import React, { useState } from "react";
import {
  IonCol,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonItem,
  IonText,
} from "@ionic/react";

import { add, paperPlaneOutline } from "ionicons/icons";

const Parse = require("parse");

export default function CreateToDo() {
  //STATE VAR AND STATE ACTION AND ASSIGN PROPERTIES
  const [newToDoObject, setNewToDoObject] = React.useState({
    title: "",
    description: "",
    task: "",
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const createNewToDoObject = async () => {
    const newToDo = new Parse.Object("ToDo", newToDoObject);
    newToDo.set(newToDoObject);

    try {
      const newToDoObject = await newToDo.save();

      const newToDoObjJSON = JSON.stringify(newToDoObject);

      alert("The New To Do Object Has been Created >>>>! " + newToDoObjJSON);
    } catch (error: any) {
      alert("Errro was found in createNewToDoObject " + error);
    }
  };

  //Hanlde ToDoChg

  const handleToDoCHG = (event: any) => {
    setNewToDoObject((previous: any) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));

    //html5
  };

  return (
    <>
      <IonGrid fixed={true}>
        <IonText>
          Create ToDo <IonIcon icon={paperPlaneOutline} />
        </IonText>
        <IonRow>
          <IonCol size="6">
            <IonItem>
              <IonLabel color={"success"} position="stacked">
                Title
              </IonLabel>
              <IonInput
                name="title"
                onIonChange={handleToDoCHG}
                placeholder="Enter Title here..."
                maxlength={25}
              />
            </IonItem>
          </IonCol>

          <IonCol size="6">
            <IonItem>
              <IonLabel color={"success"} position="stacked">
                Task
              </IonLabel>
              <IonInput
                name="task"
                onIonChange={handleToDoCHG}
                placeholder="Enter Task here..."
                maxlength={25}
              />
            </IonItem>
          </IonCol>

          <IonCol size="10">
            <IonItem>
              <IonLabel color={"success"} position="stacked">
                Description
              </IonLabel>
              <IonTextarea
                name="description"
                onIonChange={handleToDoCHG}
                style={{ resize: "none" }}
                placeholder="Enter Description here..."
                maxlength={100}
              />
            </IonItem>
          </IonCol>

          <IonCol size="2">
            <IonButton
              onClick={createNewToDoObject}
              expand="block"
              color={"success"}
            >
              {" "}
              <IonIcon icon={add} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
