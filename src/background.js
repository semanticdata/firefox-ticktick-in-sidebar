// Background script for TickTick in Sidebar extension
// This runs as a service worker in Manifest V3

/**
 * Logs errors to the console with extension context
 * @param {Error} e - The error to log
 */
function onError(e) {
  console.error("TickTick Sidebar Extension Error:", e);
}

/**
 * Handles the sidebar toggle when the browser action is clicked
 * @param {Object} tab - The currently active tab
 */
async function handleSidebarToggle(tab) {
  try {
    await browser.sidebarAction.toggle();
  } catch (e) {
    onError(e);
  }
}

/**
 * Handles extension installation and updates
 * @param {Object} details - Installation details containing reason
 */
async function handleInstalled(details) {
  try {
    if (details.reason === "install" || details.reason === "update") {
      await browser.runtime.openOptionsPage();
    }
  } catch (e) {
    onError(e);
  }
}

// Register event listeners
browser.action.onClicked.addListener(handleSidebarToggle);
browser.runtime.onInstalled.addListener(handleInstalled);
