
/**
 * An element or entity that can be Copied by the Application or System clipboards
 * 
 * For HTML Custom Elements, they will implement this behavior themselves
 * For Virtual (Canvas) Entities, they will implement this behavior themselves but will be invoked by the Canvas "Copy" functionality
 */
export interface ICopyable {
	/**
	 * Should "Copy" data into the DataTransfer object
	 * @param dataTransfer object to put the copied data into
	 */
	HandleCopy(dataTransfer: DataTransfer): void;
}
