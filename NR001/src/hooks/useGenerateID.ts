import uuid from 'react-native-uuid';


const useGenerateID = () => {
    const ID = <string>uuid.v4();

    return {
        ID
    }
};

export default useGenerateID;