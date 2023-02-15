import { doc, updateDoc } from "firebase/firestore";
import { TitlesCollectionEnum, client } from "../../configuration";

const changeTitleService = async (appeal: string) => {
  await updateDoc(
    doc(client, TitlesCollectionEnum.COLLECTION, TitlesCollectionEnum.TABLE),
    {
      appeal: appeal,
    }
  );
};

export { changeTitleService };
