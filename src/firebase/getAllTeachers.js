import { onValue } from "firebase/database";
import { teachersRef } from "./firebase";

onValue(teachersRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
