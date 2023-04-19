        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

        // from Ashwin's tutorial 2: https://docs.google.com/document/d/1qDxDLbw3Iqda_a8lEHjdyMNVphEQSgPpOYlOC1gtvX0/edit
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyByrZHtWHyaMUAxSHt5IUq897zXHPWdVys",
            authDomain: "fir-realtime-trial2.firebaseapp.com",
            databaseURL: "https://fir-realtime-trial2-default-rtdb.firebaseio.com",
            projectId: "fir-realtime-trial2",
            storageBucket: "fir-realtime-trial2.appspot.com",
            messagingSenderId: "766643859179",
            appId: "1:766643859179:web:0435595dd4b47308e3d8ae",
            measurementId: "G-V76PKJ5X2V"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);


        // custom code
        const numLikesDOM = document.querySelector('#numLikes');
        onValue(ref(db, "/likes/numLikes"), (snapshot) => {
            let data = snapshot.val();
            numLikesDOM.innerHTML = data
        });

        document.querySelector('button').addEventListener('click',function(){
            // const numberLikes = parseInt(numLikes[i].innerHTML) + 1

            const numberLikes = parseInt(numLikesDOM.innerHTML) + 1;
            set(ref(db, "likes"), {
                numLikes: numberLikes,
            });

        });

        const name = document.querySelector("#username");
        const messages = document.querySelector("#message");
        let upDate = document.querySelector("#send-btn")
        upDate.addEventListener("click", function writeUserData(userId, name, messages) {
            set(ref(db, 'users/' + userId), {
                username: name.value,
                message: messages.value,

            });
        })