import {v4} from "uuid"
const storageSetter =(file,folder) =>{
    const fileName = file.name
    const folderName=folder
    const textV4=v4()
    console.log(  `${folderName}/${fileName +textV4}`)
    return `${folderName}/${fileName +textV4}`
}
export default storageSetter