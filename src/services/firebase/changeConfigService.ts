import { doc, updateDoc } from "firebase/firestore";
import { AttractAttentionCollectionEnum, client } from "../../configuration";

const changeConfigService = async (data: any) => {
  await updateDoc(
    doc(
      client,
      AttractAttentionCollectionEnum.COLLECTION,
      AttractAttentionCollectionEnum.TABLE
    ),
    {
      data: data,
    }
  );
};

export { changeConfigService };
