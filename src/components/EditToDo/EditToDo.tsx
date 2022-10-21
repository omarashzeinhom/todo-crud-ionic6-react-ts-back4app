import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonItem,
  IonItemDivider,
  IonText,
  IonCheckbox,
  IonBadge,
  IonLabel,
  IonList,
  IonRippleEffect,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { close, returnDownBack } from "ionicons/icons";

import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import { ParseOptions } from "querystring";

const Parse = require("parse");

const EditToDo: FC<{}> = (): ReactElement => {
  //1. STATE VAR And SetStateAction
  var [toDos, setToDos] = useState([
    {
      objectId: " ",
      title: "",
      description: "",
      task: "",
      isCompleted: Boolean(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  // extending the Parse object
  const ToDo: Parse.Object[] = Parse.Object.extend("ToDo"); // extend todo

  const parsequery: Parse.Query = new Parse.Query(ToDo);

  //2. ASYNC Function to handle reading tasks with useCallback hook to handle each task instead of going in an infinte loop
  const readTasks = useCallback(async function (): Promise<Boolean> {
    try {
      const results: Parse.Object[] = await parsequery.find();

      const mappedData = [];

      for (const object of results) {
        const objId: string = object.id;
        const title: string = object.get("title");
        const decription: string = object.get("description");
        const task: string = object.get("task");
        const isCompleted: boolean = object.get("isCompleted");
        const createdAt: Date = object.get("createdAt");
        const updatedAt: Date = object.get("updatedAt");

        let resultsFix = {
          objectId: objId, //string
          title: title, //string
          description: decription,
          task: task,
          isCompleted: isCompleted, //boolean
          createdAt: createdAt, //date
          updatedAt: updatedAt, //date
        };

        mappedData.push(resultsFix);
      }
      setToDos(mappedData);
      return true;
    } catch (error: any) {
      console.warn("Error has been found in readTasks " + error);
      return false;
    }
  }, []);

  console.log(toDos);

  // 3. useEffect
  useEffect(() => {
    readTasks();
  }, [readTasks]);

  return (
    <>
      {toDos?.map((todo: any, index: any) => {
        // MAP OVER THE TODOS AND RETURN THE INFO

        //GET ID

        var objId: string = todo?.objectId;
        //console.log(objId);

        //DELETE TODO
        const deleteToDo = async () => {
          try {
            const singleObject: Parse.Object = await parsequery.get(objId);

            const response: any = await singleObject.destroy();

            if (response) {
              alert(`${objId} To Do Has Been Deleted`);
            } else {
              alert(`Error: Nothing was Delted`);
            }

            return true;
          } catch (error: any) {
            console.warn("Error has been found in deleteToDo" + error);
          }
        };

        //UPDATE TODO

        const completeTask = async () => {
          try {
            const object = await parsequery.get(objId);
            object.set("isCompleted", true);
            object.set("objectId", objId);
            object.save();
          } catch (error: any) {
            console.warn("Error has been found in completeTask" + error);
          }
        };

        return (
          <div key={todo + index}>
            <table>
              <thead>
                <tr>
                  <th>Object Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Task</th>
                  <th>Completed</th>
                  <th>CreatedAt</th>
                  <th>updatedAt</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> {todo?.objectId}</td>
                  <td> {todo?.title}</td>
                  <td> {todo?.description}</td>
                  <td> {todo?.task}</td>
                  <td>  <IonCheckbox
                                  color="medium"
                                  // eslint-disable-next-line react/jsx-no-duplicate-props
                                  onClick={completeTask}
                                  disabled={todo?.isCompleted === true}
                                /> {todo?.isCompleted.toLocaleString()
                                
                                }</td>
                  <td> {todo.createdAt?.toDateString()}</td>
                  <td> {todo.updatedAt?.toDateString()}</td>
                </tr>
              </tbody>
            </table>
            <IonButton color="danger" expand="block" onClick={deleteToDo}>
              <IonIcon icon={close} />{" "}
            </IonButton>

            <p color="sucess">
              ObjectId : Title: Description: Task: Completed CreatedAt UpdatedAt
            </p>
          </div>
        );
      })}
    </>
  );
};

export default EditToDo;
