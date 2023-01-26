import { doc, getDoc } from "firebase/firestore";
import { ImagesCollectionEnum, client } from "../../configuration";

const getImageLink = async () => {
  const querySnapshot = await getDoc(
    doc(client, ImagesCollectionEnum.COLLECTION, ImagesCollectionEnum.TABLE)
  );
  return querySnapshot.data();
};

export { getImageLink };
