import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get, onValue, push, update } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.9.0/firebase-database.js";


// Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDIUnftA9igJmbhjWVm6miWBsTZ4ccRxSM",
  
    authDomain: "ctug-8cb7d.firebaseapp.com",
  
    databaseURL: "https://ctug-8cb7d-default-rtdb.firebaseio.com",
  
    projectId: "ctug-8cb7d",
  
    storageBucket: "ctug-8cb7d.appspot.com",
  
    messagingSenderId: "77567502597",
  
    appId: "1:77567502597:web:5668426309c05aa08bef6c",
  
    measurementId: "G-R7KXTY0FBG"
  
  };
  
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);

function on1(){
    const starCountRef = ref(db,'relays/relay1');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b1").html("ON ")
        $("#bt-1").addClass("button1")
      }else if(data == 0){
        $("#b1").html("OFF ")
        $("#bt-1").removeClass("button1")
      }
      
    });
}

 function on2(){
    const starCountRef = ref(db,'relays/relay2');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b2").html("OFF 2")
        $("#bt-2").addClass("button2")
      }else if(data == 0){
        $("#b2").html("ON 2")
        $("#bt-2").removeClass("button2")
      }
    });
}
    
function on3(){
    const starCountRef = ref(db,'relays/relay3');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b3").html("OFF 3")
        $("#bt-3").addClass("button3")
      }else if(data == 0){
        $("#b3").html("ON 3")
        $("#bt-3").removeClass("button3")
      }
    });
}
    

function on4(){
    const starCountRef = ref(db,'relays/relay4');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b4").html("OFF 4")
        $("#bt-4").addClass("button4")
      }else if(data == 0){
        $("#b4").html("ON 4")
        $("#bt-4").removeClass("button4")
      }
    });
}

on1();
on2();
on3();
on4();

    
$("#bt-1").click(()=>{
    const starCountRef = ref(db,'relays/relay1');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            'relays/relay1':0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            'relays/relay1':1
        }
        update(ref(db), updates1);
      }
      
    },{
        onlyOnce: true
    });
})
    
$("#bt-2").click(()=>{
    const starCountRef = ref(db,'relays/relay2');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            'relays/relay2':0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            'relays/relay2':1
        }
        update(ref(db), updates1);
      }
      
    },{
        onlyOnce: true
    });
})

  

$("#bt-3").click(()=>{
    const starCountRef = ref(db,'relays/relay3');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            'relays/relay3':0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            'relays/relay3':1
        }
        update(ref(db), updates1);
      }
      
      
    },{
        onlyOnce: true
    });
})
$("#bt-4").click(()=>{
    const starCountRef = ref(db,'relays/relay4');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            'relays/relay4':0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            'relays/relay4':1
        }
        update(ref(db), updates1);
      }
      
      
    },{
        onlyOnce: true
    });
})

const starCountRef1 = ref(db,'relays/relay1');
onValue(starCountRef1, (snapshot) => {
  const data = snapshot.val();
  
  if(data == 1){
    $("#status").html("<b>Motor is in OFF State</b>")
  }else if(data == 0){
    $("#status").html("<b>Motor is in ON State</b>")
  }
  
});