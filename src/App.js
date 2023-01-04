import DisplayItems from './components/DisplayItems';
import AddNewItems from './components/AddNewItem';
import './App.css';

function App() {
  return <div class="container" style={{"marginTop":"20px"}}>
    <AddNewItems id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"/>
    <div class="row" style={{"marginTop":"40px"}}>
      <div class="col-12">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"backgroundColor":"#212529","color":"white","float":"right","marginRight":"20px"}}>add</button>
      </div>
      <div class="col-12">
      <DisplayItems/>
      </div>
      
    </div>
  </div>
}

export default App;
