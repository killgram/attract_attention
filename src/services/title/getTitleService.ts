import { doc, getDoc } from "firebase/firestore";
import { client, TitlesCollectionEnum } from "../../configuration";

const getTitleService = async () => {
  const querySnapshot = await getDoc(
    doc(client, TitlesCollectionEnum.COLLECTION, TitlesCollectionEnum.TABLE)
  );
  return querySnapshot.data();
};

export { getTitleService };
