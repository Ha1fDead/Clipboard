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

export class PasteContainer implements IPasteContainer {
	private pasteHandlers: IPasteHandler[] = [];

	public HandlePaste(data: DataTransfer): void {
		const pasteHandlers = this.pasteHandlers.filter((handler) => handler.CanHandle(data.types));
		if (pasteHandlers.length === 0) {
			// We don't recognize any of the types in this paste event. Don't populate data transfer and just return
			return;
		}

		if (pasteHandlers.length > 1) {
			throw new Error("Cannot handle multiple handlers yet");
		}

		pasteHandlers[0].HandlePaste(data);
	}

	public RegisterPasteHandler(handler: IPasteHandler): void {
		this.pasteHandlers.push(handler);
	}
}
