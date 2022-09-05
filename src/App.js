import { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';


function App() {

  return (
    <div className="App">
    
    <form id="customerForm" className="customerForm">
      <div>
       <label for="firstname">Firstname</label><br/>
        <input  required type="text" placeholder="Firstname" id="firstname" />
      </div>
      <div>
       <label for="lastname">Lastname</label><br/>
        <input required type="text"  placeholder="Lastname" id="lastname" />
      </div>
      <div>
      <label for="email">Email</label><br/>
        <input required type="email"  placeholder="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
      </div>
      <div>
        <label for="phone">Telephone (123-123-1234)</label><br/>
        <input required type="tel" placeholder="Phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>      
    </form>
    
    </div>
  );
}

export default App;
