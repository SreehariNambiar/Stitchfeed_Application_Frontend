const cloud_name = "dsjyfpwem"
const upload_preset = "stitchfeed"


export const uploadToCloud = async(pics, fileType) => {
    if(pics && fileType){
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset", upload_preset)
        data.append("cloud_name", cloud_name)
        data.append("file_type", fileType)
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`, {
            method: "POST",
            body: data
        })

        

        const fileData = await res.json();
        console.log("res", fileData.url)

        // return fileData.secure_url
        return fileData.url
    }
    else{
        console.log("error ..........")
    }
}