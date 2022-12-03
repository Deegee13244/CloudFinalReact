import React, { useState } from "react"
import { getRequest } from "../../utils/request"
import { Table } from "reactstrap"

const Search = () => {
  const [value, setValue] = useState(10)
  const [totalData, setTotalData] = useState([])

  React.useEffect(() => {
    onClickSearch()
  }, [])

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onClickSearch = async () => {
    if (isNaN(value)) {
      return alert("Value must be a number")
    }
    const result = await getRequest(`datastore?value=${value}`)
    setTotalData(result)
  }

  return (
    <>
      <div className="search">
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
      <button type="button" onClick={onClickSearch} className="button">
        Get Table
      </button>

      {totalData.length > 0 ? (
        <Table>
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
                <th scope="row">{item.HSHD_NUM}</th>
                <th scope="row">{item.BASKET_NUM}</th>
                <th scope="row">{item.PURCHASE}</th>
                <th scope="row">{item.PRODUCT_NUM}</th>
                <th scope="row">{item.DEPARTMENT}</th>
                <th scope="row">{item.COMMODITY}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  )
}

export default Search
