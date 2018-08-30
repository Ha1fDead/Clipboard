import { IPasteHandler } from "./pastehandler";
/**
 * System / Application clipboard state can be "Pasted" into this Container
 *
 * Similar to Drop, Paste is a one-to-many operation. Many "Pastes" can be sent to a single "PasteContainer"
 * Thus this is split into ""
 *
 * For HTML Paste Containers, this will be implemented directly (to find and discover "PasteHandlers")
 * For Virtual (Canvas) Containers, this will be invoked by the HTML Canvas' PasteContainer
 */
export interface IPasteContainer {
    /**
     * Should "Paste" the data from the DataTransfer and create or modify application state accordingly
     * @param data to be pasted
     */
    HandlePaste(data: DataTransfer): void;
}
export declare class PasteContainer implements IPasteContainer {
    private pasteHandlers;
    HandlePaste(data: DataTransfer): void;
    RegisterPasteHandler(handler: IPasteHandler): void;
}
