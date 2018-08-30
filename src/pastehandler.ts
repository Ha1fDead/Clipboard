import { IPasteContainer } from "./pastecontainer";

/**
 * Paste handlers are where we want to actually "Handle" Paste Events
 */
export interface IPasteHandler extends IPasteContainer {
	/**
	 * Determines if this PasteHandler can handle any of the types within the string
	 * @param types from the DragEvent DataTransfer that need to be handled
	 */
	CanHandle(types: string[]): boolean;
}
