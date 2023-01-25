import { doc, getDoc } from "firebase/firestore";
import { AttractAttentionCollectionEnum, client } from "../../configuration";

const getConfigService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AttractAttentionCollectionEnum.COLLECTION,
      AttractAttentionCollectionEnum.TABLE
    )
  );
  return querySnapshot.data()?.data;
};

export { getConfigService };
