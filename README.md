# About
<a href="https://ionic-6-ts-back4app-todolist-andgoedu.netlify.app/login">Demo</a>

An ionic 6 , web application built in typescript and react js framework ,while in terms of the backend back 4app was used as the api .

- Project Built With

## Project Requirements

1. [nodejs 16.18.0](https://nodejs.org/en/)

Make sure you installed node and node package manager using ```npm -v``` and ```node -v```

2. [yarn](https://yarnpkg.com/)
  
- Install yarn by using
  
```
npm install -g yarn
```

3. [ionic framework](https://ionicframework.com/getting-started)

```
npm i -g @ionic/cli
```

## Setup the project

```ts
ionic start todoApp --type=react --capacitor
```

-- use yarn instead of npm
```ionic config set -g yarn true```

### Packages to install

`parse` From [parse  - yarn pkg](https://yarnpkg.com/package/parse)
``` @parse/react ``` From [@parse/react - yarn pkg](https://yarnpkg.com/package/@parse/react)

& [Getting started with the Parse React hook for real time updates using Parse](https://www.back4app.com/docs/react/real-time/react-hook-real-time)

```
yarn add @parse/react parse
```

``` ``` []()

#### Setup BackEnd Schema

```ts
// Step 1 Add Parse API Keys into App.tsx
//  Require Parse for tsx
const Parse = require('parse');

// Step 1 Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = ' ';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = ' ';

```



##### Project Structure and files to add

```
- public
- /assets               // images
-  /icons               // favicon.ico for example
- index.html            // the html rendered webpage
- src                   //root folder
- /components           // where all the components reside
-  /CreateToDo          //1. create new folder inside ./src/components/ call it CreateToDo
-  /CreateToDo.tsx      //2.  create new file inside /src/components/CreateToDo call it CreateToDo.tsx 
- /pages                //where all pages reside
-  /EditToDo            //3.create new folder inside ./src/pages/ call it EditToDo
-  /EditToDo.tsx        //4. create new file inside ./src/pages/EditToDo call it EditToDo.tsx 
- /theme                // Where ionic app.css styles reside
-   /variables.css      // ionic default css variables for dark or light mode
- App.tsx               // Where the application component resides, the ionic router and also initializeParse Client
- index.tsx             // Where the application renders in the index.html <div id="root" ></div>  
- .env                  // Where all the Api Keys are going to be saftely stored for production

```


1. CREATE [x]

```ts
// ADD IMPORTS 
import React, { useState, useEffect } from "react";
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

import { add,paperPlaneOutline } from "ionicons/icons";

const Parse = require("parse");

// Export a default function 

export default function CreateToDo() {

    return (
        <></>
    )
    }
```


```tsx
 //ADD STATE VAR AND STATE ACTION AND ASSIGN PROPERTIES
  const [newToDoObject, setNewToDoObject] = useState({
    title: "",
    description: "",
    task: "",
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
```

```tsx
//ADD async arrow function to handle creating the new to object{}

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
```


```tsx

//Hanlde ToDoChg 

const handleToDoCHG= (event: any)=> {

setNewToDoObject((previous : any)=> ({
  ...previous,
  [event.target.name]: event.target.value,
}));

//html5

};
```

- Make sure to match the html5 property name with the properties passed to the object 
- Also add ```onIonChange={handleToDoCHG}``` in each input to handle the users input

```tsx
//ADD html5 name property and handleToDoCHG to handle the user inputs change 
<IonGrid fixed={true}>
  <IonText>
  Create ToDo <IonIcon icon={paperPlaneOutline}/>
  </IonText>

    <IonInput name="title" onIonChange={handleToDoCHG} placeholder="Enter Title here..." maxlength={25}/>
  
      <IonInput name="task" onIonChange={handleToDoCHG} placeholder="Enter Task here..." maxlength={25} />

 
      <IonTextarea name="description" onIonChange={handleToDoCHG} style={{resize: "none"}} placeholder="Enter Description here..."  maxlength={100}/>


<IonButton onClick={createNewToDoObject} expand="block" color={"success"}> <IonIcon icon={add} />
</IonButton>
</IonGrid>

```


Final File CreateToDo.tsx

```tsx
//CreateToDo.tsx
import React, { useState, useEffect } from "react";
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
  const [newToDoObject, setNewToDoObject] = useState({
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

```

2. READ []

3. UPDATE []

4. DELETE []

###### References

1. [Using Yarn Instead of Npm for Ionic #10647](https://github.com/ionic-team/ionic-framework/issues/10647)

2. 
Omar Zeinhom . AKA ANDGOEDU 2022-2023