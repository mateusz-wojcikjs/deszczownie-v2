'use client';

import React, { useState } from "react";
import { Button, useField } from '@payloadcms/ui'
import type { JSONFieldClientComponent } from 'payload'

const isUnitValue = (text: string): boolean => {
  return /[a-zA-Z]/.test(text);
};

const formatSuperscript = (text: string): string => {
  if (!isUnitValue(text)) return text;
  return text.replace(/(\d+)/g, (match) =>
    match.split("").map(digit => `<sup>${digit}</sup>`).join("")
  );
};

export const Table: JSONFieldClientComponent = ({ path }) => {
  const { value, setValue } = useField<string[][]>({ path });
  const [matrix, setMatrix] = useState(value || [[""]]);
  const updateMatrix = (newMatrix: string[][]) => {
    setMatrix(newMatrix);
    setValue(newMatrix.map(row => row.map(formatSuperscript)));
  };

  const addRow = () => updateMatrix([...matrix, new Array(matrix[0].length).fill("")]);
  const addColumn = () => updateMatrix(matrix.map(row => [...row, ""]));
  const removeRow = (index: number) => {
    if (matrix.length > 1) {
      updateMatrix(matrix.filter((_, i) => i !== index));
    }
  };
  const removeColumn = (index: number) => {
    if (matrix[0].length > 1) {
      updateMatrix(matrix.map(row => row.filter((_, i) => i !== index)));
    }
  };
  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[rowIndex][colIndex] = value;
    setMatrix(newMatrix);
    setValue(newMatrix.map(row => row.map(formatSuperscript)));
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    const rows = text.split(/\r?\n/).map(row => row.split(/\t/));

    if (rows.length > 0 && rows[0].length > 0) {
      updateMatrix(rows);
    }
  };

  return (
    <div className="p-4" onPaste={handlePaste}>
      <div className="field-table-row">
        <Button onClick={addRow}>Dodaj wiersz</Button>
        <Button onClick={addColumn}>Dodaj kolumnę</Button>
      </div>
      <table className="table field-type text field-table">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2">
                  <div className="field-type__wrap">
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                      className=""
                    />
                  </div>
                </td>
              ))}
              <td className='field-table__cell'>
                <Button onClick={(): void => removeRow(rowIndex)}>Usuń wiersz</Button>
              </td>
            </tr>
          ))}
          <tr>
            {matrix[0].map((_, colIndex) => (
              <td key={colIndex} className='field-table__cell'>
                <Button onClick={(): void => removeColumn(colIndex)}>Usuń kolumnę</Button>
              </td>
            ))}
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};
