import React, { useState } from "react";
import "./App.css";

const szotar = {
  hun: {
    greetings: "Üdvözlet",
    changeLanguage: "válassz nyelvet",
    content: "Ebben az epizódban a React contextet fogjuk hasznalni",
    goodLuck: "Sok Sikert!",
    hungarian: "Magyar",
    english: "Angol",
    spanish: "Spanyol",
    french: "Francia",
  },
  en: {
    greetings: "Greetings",
    changeLanguage: "Choose language",
    content: "In this episode we'll discuss the use of React context",
    goodLuck: "Good Luck",
    hungarian: "Hungarian",
    english: "English",
    spanish: "Spanish",
    french: "French",
  },
  spa: {
    greetings: "Saludos",
    changeLanguage: "Elige lengua",
    content: "En este epizodo discutiremos el use del contexto React",
    goodLuck: "Bueno Suerte",
    hungarian: "Húngaro",
    english: "Inglés",
    spanish: "Espan",
    french: "Francis",
  },
  fr: {
    greetings: "Salutation",
    changeLanguage: "Choix de langue",
    content: "Dans cet épisode, nous discuterons du contexte de React",
    goodLuck: "Bonne chance!",
    hungarian: "Hongrois",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Francis",
  },
};
function App() {
  const [nyelv, setNyelv] = useState("hun");
  return (
    <div>
      <NyelvValaszto nyelv={nyelv} setNyelv={setNyelv} />
      <Kontener nyelv={nyelv} />
    </div>
  );
}

//idk hova
function Kontener({ nyelv }) {
  return (
    <div className="">
      <div className=""></div>
      <div className="row">
        <footer nyelv={nyelv} />
      </div>
    </div>
  );
}

function Udvozles({ nyelv }) {
  return (
    <div className="col-6 bg-warning jumbotron m-0 rounded-0">
      <h1>{szotar[nyelv].greetings}!</h1>
    </div>
  );
}

function Tartalom({ nyelv }) {
  return (
    <div className="col-6 bg-danger jumbotron m-0 rounded-0">
      <h1>{szotar[nyelv].content}!</h1>
    </div>
  );
}

function Footer({ nyelv }) {
  return (
    <div className="col-12 bg-dark jumbotron rounded-0 text-light">
      <h1>{szotar[nyelv].goodluck}!</h1>
    </div>
  );
}
function NyelvValaszto({ nyelv, setNyelv }) {
  return (
    <nav className="navbar navbar-light bg-light p-0">
      <label className="w-100 p-3">
        <h3>{szotar[nyelv].changeLanguage}</h3>
        <select
          className="form-control"
          defaultValue={nyelv}
          onChange={(e) => {
            setNyelv(e.target.value);
          }}
        >
          <option value="hun">{szotar[nyelv].hungarian}</option>
          <option value="en">{szotar[nyelv].english}</option>
          <option value="spa">{szotar[nyelv].spanish}</option>
          <option value="fr">{szotar[nyelv].french}</option>
        </select>
      </label>
    </nav>
  );
}

export default App;
