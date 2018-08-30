import { ICopyable } from "./copyable";
/**
 * An Element or Entity that can be Cut
 *
 * In HTML, the Custom Element will implement this behavior itself
 * In Virtual (Canvas), the Entity will implement this behavior and this function will be called from the Canvas' Cut operation
 */
export interface ICuttable extends ICopyable {
    /**
     * Should "Copy" the data into the DataTransfer, and also "Remove" the data from the parent
     * @param dataTransfer object to put the copy of the Cut contents into
     */
    HandleCut(dataTransfer: DataTransfer): void;
}
