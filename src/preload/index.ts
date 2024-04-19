import { contextBridge } from 'electron'

// Custom APIs for renderer
if (!process.contextIsolated)
  throw new Error('contextIsolated must be enabled in the BrowserWindow')

try {
  contextBridge.exposeInMainWorld('context', {
    // da
  })
} catch (error) {
  console.error(error)
}
