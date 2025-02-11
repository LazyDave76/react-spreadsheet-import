/// <reference types="react" />
import { DataGridProps } from "react-data-grid";
interface Props<Data> extends DataGridProps<Data> {
    rowHeight?: number;
    hiddenHeader?: boolean;
}
export declare const Table: <Data>({ className, ...props }: Props<Data>) => JSX.Element;
export {};
