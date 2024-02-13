import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import {storage} from "../Config/firebase.config"

const uploadFile = async(file,storageRef) =>{
    const folderRef=ref(storage,storageRef)
    try {
        await uploadBytes(folderRef,file)
        const url = await getDownloadURL(ref(storage,storageRef))
        console.log(url)
        return url
    } catch (error) {
        return "not possible"
    }
    
}
export default uploadFile