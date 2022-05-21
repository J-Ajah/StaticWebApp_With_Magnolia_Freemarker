import React from "react";
import { EditableArea } from "@magnolia/react-editor";

function Home(props) {
  const { title, main, footer } = props;
  console.log(main);
  return (
    <div className="App">
      <div>{main && <EditableArea content={props["main"]} />}</div>
      <div>{footer && <EditableArea content={footer} />}</div>
    </div>
  );
}


export default Home;
