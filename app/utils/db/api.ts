import db from "."



const getId = () => db.collection("bios").add({
        text: "",
    })
    .then((docRef => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    }))
    .catch((error) => {
        console.error("Error writing document: ", error);
        return Error("DB Error")
    })

const updateDocument = (id: string, text: string)=> db.collection("bios").doc(id).set({
        text
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    })

const getDocument = (id: string) => {

    const docRef = db.collection("bios").doc(id);

return docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    }
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return Error("DB Error")
}).catch((error) => {
    console.log("Error getting document:", error);
});

}

export default {getId, getDocument, updateDocument}