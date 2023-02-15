import { doc, updateDoc } from "firebase/firestore";
import { ImagesCollectionEnum, client } from "../../configuration";

const changeImagesService = async (link: string, total: number) => {
  await updateDoc(
    doc(client, ImagesCollectionEnum.COLLECTION, ImagesCollectionEnum.TABLE),
    {
      link: link,
      total: total,
    }
  );
};

export { changeImagesService };
