# Clipboard Library

A useful clipboard library for adding clipboard events to virtual canvas objects.

Currently this library is very leaky. Todo:

1. Move clipboard store so it can implement a command pattern to be consumed by undo/redo functionality
2. Convert ClipboardManager to handle user cutting straight from an HTML element without going through a SelectionManager
