import { useEffect, useState } from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "../firebaseSetup";

const DisplayItems=()=>{
    const [totalSpent,setTotalSpent] = useState();
    const [Data,setData] = useState([])
    // const Data = [{
    //     "itemName":"petrol",
    //     "price":160,
    //     "date":'02-01-2023',
    //     "description":'near mvp road'
    // },{
    //     "itemName":"dont know",
    //     "price":25,
    //     "date":'03-01-2023',
    //     "description":'near mvp road'
    // },{
    //     "itemName":"service",
    //     "price":160,
    //     "date":'05-01-2023',
    //     "description":'near mvp road'
    // }]


    useEffect(()=>{
        const q = query(collection(db,'expenseTracker'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot.docs[0].data())
        setData(querySnapshot.docs.map(doc => ({
         id: doc.id,
         data: doc.data()
          })))
        })

       
        

    },[])
    useEffect(()=>{
        let totalVal = 0;
        Data.forEach((element)=>{
               totalVal = totalVal + Number(element.data["price"]);
            })
        setTotalSpent(totalVal);
    },[Data])
    return <div class="container" style={{"marginTop":"10px"}}>
       {Data.length>=1 && <div class="row align-items-center">
            <div class="col-xs-1-12">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">count</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((element,index)=>{
                            return <tr key={index.toString()}>
                            <td scope="col">{index+1}</td>
                            <td >{(element.data.itemName)}</td>
                            <td >{(new Date(element.data.date)).toDateString()}</td>
                            <td >{element.data.price}</td>
                        </tr>
                        })}
                        <tr>
                           <td></td>
                            <td colSpan="2">Total</td>
                            
                            {totalSpent && <td>{totalSpent}</td>}
                        </tr>
                     </tbody>
                </table>
            </div>
        </div>}
    </div>
}
export default DisplayItems;