import axios from "axios";
import { db } from "../firebaseSetup";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const AddNewItems = () => {

    const formSubmit= async(e)=>{
        e.preventDefault();
        let body ={
            itemName:e.target.itemName.value,
            price:e.target.productAmount.value,
            date:e.target.purchaseDate.value,
            description:e.target.description.value,
            created: Timestamp.now()
        }
        try {
            await addDoc(collection(db,'expenseTracker'),body)
          } 
        catch (err) {
            alert(err)
          }     
    }

  return (
    <div id="exampleModal" tabindex="-1" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Item</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="form-floating" onSubmit={formSubmit}>
      <div class="modal-body">
        
          <div class="form-floating mb-3">
          <input type="text" class="form-control" id="itemName" name="productName" />
         <label for="itemName">product name</label>
          </div>
          <div class="form-floating">
          <textarea class="form-control" placeholder="for memory" id="description" style={{"height":"80px"}} name="description"></textarea>
          <label for="description">Description</label>
          </div>
           <div class="form-floating" style={{"marginTop":"10px"}}>
           <input type="date" class="form-control" id="date" name="purchaseDate"/>
           <label for="date">product name</label>
          </div>
          <div class="form-floating" style={{"marginTop":"10px"}}>
          <input type="number" class="form-control" name="productAmount" id="productprice"/>
         <label for="productprice">product price</label>
         </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
      </form>

        </div>
      </div>
    </div>
  );
};
export default AddNewItems;
