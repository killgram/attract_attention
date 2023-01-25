import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./Firebase";

const app = initializeApp(firebaseConfig);
const client = getFirestore(app);

export { client };
