import React from "react"
// import { postRequest } from "../../utils/request"

const Upload = () => {
  const [selectedFile, setSelectedFile] = React.useState(null)

  const onFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const onClickUpload = () => {
    // Create an object of formData
    const formData = new FormData() // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name) // Details of the uploaded file
    // postRequest("uploader/products", formData)
    // axios.post("api/uploadfile", formData)
  }

  return (
    <>
      <form enctype="multipart/form-data" className="profile-form">
        <h3 className="profile-item" id="upload-file-label">
          Upload
        </h3>
        <input
          type="file"
          name="file"
          id="doc-file"
          className="file-input"
          onChange={onFileSelect}
        />
        <button
          id="upload-button"
          type="button"
          className="button"
          onClick={onClickUpload}
        >
          upload
        </button>
      </form>
    </>
  )
}

export default Upload
