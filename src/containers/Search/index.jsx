import React, { useState, useCallback } from "react"
import { getRequest } from "../../utils/request"
import { Table } from "reactstrap"
import "./style.css"

const Search = () => {
  const [value, setValue] = useState(10)
  const [totalData, setTotalData] = useState([])

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onClickSearch = useCallback(async () => {
    if (isNaN(value)) {
      return alert("Value must be a number")
    }
    const result = await getRequest(`datastore?value=${value}`)
    setTotalData(result)
  }, [value])

  React.useEffect(() => {
    onClickSearch()
  }, [onClickSearch])

  return (
    <>
      <div className="search">
        <div className="input-container">
          <div className="search-input-container">
            <label htmlFor="search-input" className="label">
              HSHD_NUM
            </label>
            <input
              type="text"
              id="register-email"
              className="input"
              value={value}
              onChange={onChangeValue}
              required
            />
          </div>

          <button
            type="button"
            onClick={onClickSearch}
            className="button search-page-button"
          >
            Get Table
          </button>
        </div>
      </div>

      {totalData.length > 0 ? (
        <Table className="table">
          <thead>
            <tr>
              <th>HSHD_NUM</th>
              <th>BASKET_NUM</th>
              <th>PURCHASE</th>
              <th>PRODUCT_NUM</th>
              <th>DEPARTMENT</th>
              <th>COMMODITY</th>
            </tr>
          </thead>
          <tbody>
            {totalData.map((item) => (
              <tr>
                <td>{item.HSHD_NUM}</td>
                <td>{item.BASKET_NUM}</td>
                <td>{item.PURCHASE}</td>
                <td>{item.PRODUCT_NUM}</td>
                <td>{item.DEPARTMENT}</td>
                <td>{item.COMMODITY}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  )
}

export default Search
