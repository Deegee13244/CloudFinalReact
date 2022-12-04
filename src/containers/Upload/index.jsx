import React from "react"
import { postUploadRequest } from "../../utils/request"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "./style.css"

const Upload = () => {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [fileType, setFileType] = React.useState("households")

  const onFileSelect = (e) => {
    e.preventDefault()
    setSelectedFile(e.target.files[0])
  }

  const onClickUpload = async () => {
    if (!selectedFile) {
      return alert("No file selected")
    }

    const formData = new FormData() // Update the formData object
    formData.append("file", selectedFile)
    formData.append("filename", selectedFile.name)
    const result = await postUploadRequest(`uploader/${fileType}`, formData)

    if (result.error) {
      alert("Error: csv did not update")
    } else {
      alert("Update success")
    }
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const onSelectDropdown = (e) => {
    setFileType(e.target.innerText)
  }

  const getTableName = () => {
    switch (fileType) {
      case "products":
        return (
          <div>
            Make sure the column headers are
            'PRODUCT_NUM','DEPARTMENT','COMMODITY', 'BRAND_TY',
            'NATURAL_ORGANIC_FLAG'
          </div>
        )
      case "households":
        return (
          <div>
            Make sure the column names are 'HSHD_NUM','L','AGE_RANGE',
            'MARITAL', 'INCOME_RANGE', 'HOMEOWNER', 'HSHD_COMPOSITION',
            'HH_SIZE', 'CHILDREN'
          </div>
        )
      case "transactions":
        return (
          <div>
            {" "}
            Make sure the column names are 'BASKET_NUM', 'HSHD_NUM','PURCHASE_',
            'PRODUCT_NUM', 'SPEND', 'UNITS', 'STORE_R', 'WEEK_NUM', 'YEAR'
          </div>
        )

      default:
        break
    }
  }

  return (
    <div>
      <form encType="multipart/form-data" className="upload-form">
        <h3 className="upload-item" id="upload-file-label">
          Upload CSV file
        </h3>

        <h6>Select the file you want to upload</h6>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            {fileType || "Select table to upload"}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={onSelectDropdown}>households</DropdownItem>
            <DropdownItem onClick={onSelectDropdown}>products</DropdownItem>
            <DropdownItem onClick={onSelectDropdown}>transactions</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {getTableName()}
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
    </div>
  )
}

export default Upload
