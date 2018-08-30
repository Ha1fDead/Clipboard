/**
 * Contains an internal reference to the clipboard state. When writing the state it will also attempt to write to the browser's clipboard
 */
export declare class ClipboardStore {
    private data;
    constructor();
    Data: DataTransfer | null;
    AttemptCopyClipboardData(data: DataTransfer): Promise<void>;
}
