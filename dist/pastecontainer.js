export class PasteContainer {
    constructor() {
        this.pasteHandlers = [];
    }
    HandlePaste(data) {
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
    RegisterPasteHandler(handler) {
        this.pasteHandlers.push(handler);
    }
}
//# sourceMappingURL=pastecontainer.js.map