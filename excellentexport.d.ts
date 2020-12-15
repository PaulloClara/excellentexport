export type ExcellentExportAnchor = string | Element;
export type ExcellentExportTable = string | Element;

export interface ExcellentExportOptions {
  anchor: ExcellentExportAnchor;
  format: "xlsx" | "xls" | "csv";
  filename: string;
}

export interface ExcellentExportSheet {
  name: string;
  from?: {
    table?: ExcellentExportTable;
    array?: any[];
    arrayHasHeader?: boolean;
    removeColumns?: any[];
    filterRowFn?: (row: any) => boolean;
    fixValue?: (value: any, row: any, column: any) => any;
    fixArray?: (array: any[]) => any;
  };
}

declare namespace excellentexport {
  function version(): string;
  function excel(
    anchor: ExcellentExportAnchor,
    table: ExcellentExportTable,
    name: string
  ): boolean;
  function csv(
    anchor: ExcellentExportAnchor,
    table: ExcellentExportTable,
    delimiter: string,
    newLine: string
  ): boolean;
  function convert(
    options: ExcellentExportOptions,
    sheets: ExcellentExportSheet[]
  ): boolean | string;
}

export default excellentexport;
