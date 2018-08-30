import { IClipboardSelectionManager } from "./clipboardselectionmanager.js";
import { ClipboardStore } from "./clipboardstore.js";
/**
 * Responsible for handling browser-level Clipboard Events, and drilling them down into actionable elements
 */
export declare class ClipboardManager {
    private selectionManager;
    private clipboardStore;
    constructor(selectionManager: IClipboardSelectionManager, clipboardStore: ClipboardStore);
    /**
     * Also solves the "External" -> "Internal" paste problem, but requires browser permissions so not ideal
     */
    AttemptReadClipboardData(): Promise<DataTransfer | null>;
    /**
     * NOTE: This is unsupported in ALL browsers
     * https://www.w3.org/TR/clipboard-apis/#clipboard-events-and-interfaces
     *
     * This should fire if a user copies something EXTERNALLY
     */
    OnClipboardChange: (event: ClipboardEvent) => void;
    /**
     * When a browser clipboard copy event is intercepted, check which element has the current focus
     * If it is the INTERNAL clipboard element, then procede with our app-specific copy rules
     * Otherwise, let the action persist natively.
     *
     * Fired:  right-click -> `copy`, ctrl-c, etc. in the browser context
     *
     * Behavior:
     * 1. User fires action request
     * 2. App checks if any canvas / internal elements have focus. If they don't, exit and let the action persist as normal
     * 3. The canvas element has focus, check the current "selected" element.
     *  there is no "selected" element and no judgement can be made, exit and let the action persist as normal
     * 4. Copy the data to both the internal AND external clipboard
     *
     * We copy to both the internal and external buffers so all copy/paste instances are unified.
     */
    OnCopy(event: ClipboardEvent): void;
    /**
     * External browser-controlled cut action.
     *
     * Fired: ctrl-x, right click -> cut
     *
     * Behavior:
     *
     * 1. User fires action request
     * 2. App checks if any canvas / internal elements have focus. If they don't, exit and let the action persist as normal
     * 3. The canvas element has focus, check the current "selected" element.
     * If there is no "selected" element and no judgement can be made, exit and let the action persist as normal
     * 4a. Fire a "Cut" action and push onto the command stack
     * 4b. Remove the "Selected" element and copy the data to both the internal AND external clipboard
     *
     * We copy to both the internal and external clipboards so all copy/paste instances are unified.
     */
    OnCut(event: ClipboardEvent): void;
    /**
     * External browser-controlled paste action
     *
     * Fired: ctrl-v, right click -> paste within browser context
     *
     * Behavior:
     *
     * 1. User fires action request
     * 2. App checks if any canvas / internal elements have focus. If they don"t, exit and let the action persist as normal
     * 3. The canvas element has focus, check the current "selected" element.
     * If there is no "selected" element and no judgement can be made, exit and let the action persist as normal
     * 4. Fire a "Paste" action into the command stack with the most-recent "copied" item
     *
     * There is a nuance between the two buffers and "paste". If we DON"T have
     * permission to asynchronously control the buffer, there can be two different sets of data in the "paste" context. Example:
     *
     * 1. User uses browser context to "Copy" a string of data at T:00
     * 2. User uses app context to "Copy" a string of data at T:10
     * 3. User fires an external "Paste" request that can be bound to a context
     *
     * The data that SHOULD be bound would be data #2.
     */
    OnPaste(event: ClipboardEvent): void;
}
