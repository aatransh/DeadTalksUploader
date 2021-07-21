 var firebaseConfig = {
    apiKey: "AIzaSyAPin2kHzHZaVxiDCA4hCxGcIn0-nJDER8",
    authDomain: "story-app-e13c5.firebaseapp.com",
    projectId: "story-app-e13c5",
    storageBucket: "story-app-e13c5.appspot.com",
    messagingSenderId: "668560150198",
    appId: "1:668560150198:web:f03137dffcc059a03a6017",
    measurementId: "G-578VBF84X8"
  };
  firebase.initializeApp(firebaseConfig);
  let database=firebase.firestore();

  function upload(){
      let form=document.querySelector('#form');
      const storyid=form.elements['storyId'].value;
      const story=form.elements['story'].value;

      firebase.firestore().collection("Stories").doc(storyid).set({
          Story:story

      }).then(()=>{
          alert("Data added successfully")
      }).catch((error)=>{
          alert(error);
      });
  }
