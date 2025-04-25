import React from "react";
import { Component } from "./Table.styles";
import { Typography } from "../Typography/Typography";

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
  emptyMessage = "No data available",
}: TableProps<T>) {
  return (
    <Component.Wrapper>
      <Component.Table>
        <thead>
          <Component.Row>
            {columns.map((col) => (
              <Component.Header
                key={String(col.key)}
                style={{ width: col.width }}
              >
                <Typography variant="small">{col.label}</Typography>
              </Component.Header>
            ))}
          </Component.Row>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <Component.Row>
              <Component.Cell colSpan={columns.length}>
                <Typography variant="xxsmall">{emptyMessage}</Typography>
              </Component.Cell>
            </Component.Row>
          ) : (
            data.map((row, rowIdx) => (
              <Component.Row key={rowIdx}>
                {columns.map((col) => (
                  <Component.Cell key={String(col.key)}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </Component.Cell>
                ))}
              </Component.Row>
            ))
          )}
        </tbody>
      </Component.Table>
    </Component.Wrapper>
  );
}
