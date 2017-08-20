'use strict';

function createFlashCard(title, question, answer, language) {
  try {
    var uid = firebase.auth().currentUser.uid;
    console.log('you passed')
    // A post entry.
    var postData = {
      uid: uid,
      question: question,
      answer, answer,
      title: title,
      votesUp: 0,
      votesDown: 0,
      language: language
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('flashCards').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/flashCards/' + postData.language] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  } catch (err) {
    document.getElementById("error").innerHTML = 'You are not signed in.';
    console.log(err.message);
  }

}

function getCardByLanguage(language){
  try {

  } catch (e) {

  } finally {

  }
}

var provider = new firebase.auth.GoogleAuthProvider();
function googleSignin() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')
   });
}
