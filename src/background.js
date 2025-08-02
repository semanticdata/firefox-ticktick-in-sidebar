// Background script for TickTick in Sidebar extension
// This runs as a service worker in Manifest V3

/**
 * Opens/toggles the sidebar when the browser action is clicked
 */
async function openSidebar() {
  try {
    await browser.sidebarAction.toggle();
  } catch (error) {
    console.error('Failed to toggle sidebar:', error);
  }
}

// Register click handler for browser action button
browser.action.onClicked.addListener(openSidebar);
