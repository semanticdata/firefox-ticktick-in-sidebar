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

/**
 * Modify response headers to allow iframe embedding
 */
function modifyResponseHeaders(details) {
  console.log('🔍 Intercepting response headers for:', details.url);
  console.log('🔍 Request type:', details.type);

  const responseHeaders = details.responseHeaders || [];
  console.log('🔍 Original headers count:', responseHeaders.length);

  // Log all headers before filtering
  responseHeaders.forEach(header => {
    console.log(`🔍 Header: ${header.name} = ${header.value}`);
  });

  // Remove CSP and X-Frame-Options headers
  const filteredHeaders = responseHeaders.filter(header => {
    const headerName = header.name.toLowerCase();
    const shouldRemove = ['content-security-policy', 'x-frame-options', 'x-content-type-options'].includes(headerName);
    if (shouldRemove) {
      console.log(`❌ Removing header: ${header.name}`);
    }
    return !shouldRemove;
  });

  console.log('✅ Headers after filtering:', filteredHeaders.length, 'remaining from', responseHeaders.length);

  return { responseHeaders: filteredHeaders };
}

// Test if webRequest API is available
try {
  if (browser.webRequest && browser.webRequest.onHeadersReceived) {
    console.log('✅ webRequest API available, registering listener');

    // Register webRequest listener for header modification
    browser.webRequest.onHeadersReceived.addListener(
      modifyResponseHeaders,
      { urls: ["*://*.ticktick.com/*"] },
      ["blocking", "responseHeaders"]
    );

    console.log('✅ webRequest listener registered for TickTick headers');
  } else {
    console.error('❌ webRequest API not available');
  }
} catch (error) {
  console.error('❌ Failed to register webRequest listener:', error);
}

// Register click handler for browser action button
browser.action.onClicked.addListener(openSidebar);

console.log('🚀 Background script loaded with webRequest header modification');
