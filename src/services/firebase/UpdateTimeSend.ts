import { doc, updateDoc } from "firebase/firestore";
import { AttractAttentionCollectionEnum, client } from "../../configuration";

const updateTimeSend = async (config: any) => {
  await updateDoc(
    doc(
      client,
      AttractAttentionCollectionEnum.COLLECTION,
      AttractAttentionCollectionEnum.TABLE
    ),
    {
      data: config,
    }
  );
};

export { updateTimeSend };
