import { ICopyable } from "./copyable";
import { ICuttable } from "./cuttable";
import { IPasteContainer } from "./pastecontainer";
/**
 * Helper manager implemented by consumers of the library
 *
 * Use this to determine what is being Copied/Cut or where a Paste is supposed to go
 *
 * This aids in binding to virtual canvas functionality.
 * The browser elements that are cut/copied / pasted directly into
 */
export interface IClipboardSelectionManager {
    /**
     * Returns the element that the user will have just "Copied"
     *
     * For HTML Elements, this should return the custom element that implements the ICopyable interface
     * For Canvas Elements, this should return the VObject3d element that implements the ICopyable interface
     */
    FindActiveCopyable(): ICopyable | null;
    /**
     * Returns the element that the user will have just "Cut"
     *
     * For HTML Elements, this should return the custom element that implements the ICuttable interface
     * For Canvas Elements, this should return the VObject3d element that implements the ICuttable interface
     *
     * (Note: the ICuttable element itself should be invoking its parent to remove itself when its Cut method is invoked)
     */
    FindActiveCuttable(): ICuttable | null;
    /**
     * Returns the Active Paste Container that the user is attempting to Paste Data into
     *
     * For HTML Elements, this should return the custom element that implements the IPasteContainer interface
     * For Canvas Elements, this should return the Canvas IPasteContainer (which will handle finding the appropriate element to paste into)
     */
    FindActivePasteContainer(): IPasteContainer | null;
}
