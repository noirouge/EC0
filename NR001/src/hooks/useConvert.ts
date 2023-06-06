import {TextEncoder} from 'text-encoding'

function useConvert(){

    const convertStringToMb = (text: string) => {
        const bytes = new TextEncoder().encode(text).byteLength;
        const megabytes = bytes / (1024 * 1024);

        return megabytes;
    }
return{
    convertStringToMb,
}
}


export default useConvert;