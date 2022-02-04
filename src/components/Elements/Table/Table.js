import React from 'react';
import "./style.css"

function Table({ data, width }) {
  return (
    <table className="table-root" style={{width: `${width}`}}>
      <tbody>
        {data.map((row) => (
          <tr>
            {row.col.map(col => (
              <td style={{ width: col.width ? col.width : "auto" },{ backgroundColor: col.backgroundColor ? col.backgroundColor : null }} className={`${col.head ? "bold" : null}`} rowSpan={col.rowspan ? col.rowspan : null} colSpan={col.colspan ? col.colspan : null}> {col.value}</td>
            ))}
          </tr>
        ))}
 
      </tbody>
    </table >
  )
}

export default Table
