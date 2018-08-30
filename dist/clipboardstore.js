/**
 * Contains an internal reference to the clipboard state. When writing the state it will also attempt to write to the browser's clipboard
 */
export class ClipboardStore {
    constructor() {
        this.data = null;
    }
    get Data() {
        return this.data;
    }
    set Data(dataTransfer) {
        this.data = dataTransfer;
    }
    async AttemptCopyClipboardData(data) {
        /**
         * Note: Chrome does not currently support arbitrary "Write" operations
         *
         * This means this will only support text copy for now. "Write" will probably (hopefully) be implemented within the next year.
         *
         * https://developer.mozilla.org/en-US/docs/Web/Events/paste
         */
        const clipboard = navigator.clipboard;
        await clipboard.writeText(data.getData("text"));
        // await clipboard.write(data);
    }
}
//# sourceMappingURL=clipboardstore.js.map