import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <div>
      <main className="container">
        <section>
          <h3>
            <span className="birthdays-count">{birthdays.length}</span> birthays
            today
          </h3>
          <List birthdays={birthdays} />
          <button onClick={() => setBirthdays([])}>Clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
