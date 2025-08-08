# Changelog

## 1.3.0

- Update from Manivest v2 to Manifest v3
  - Changed `browserAction` to `action`
  - Removed deprecated `browser_style`
  - Renamed old names from extension template
  - Add better error handling
  - Update to use async/await more consistently
- Refactor Options page
  - Update to use more semantic HTML
  - Styled the page with only CSS
  - Added new heart icon
  - Removed external dependecies (Font Awesome, Bulma)
  - Simplified validation logic and removed unnecessary complexity
  - Added user feedback with status messages for success/error states
  - Improved error handling with try-catch blocks
- Refactor background script
  - Added centralized error handling with dedicated onError function
  - Enhanced JSDoc documentation for all functions
  - Added extension lifecycle management (opens options on install/update)  
  - Improved function naming for better clarity
  - Better code organization with clear event listener registration
  - Enhanced error context in logging messages
- Refactor sidebar panel
  - Refactored sidebar panel to use more semantic HTML
  - Added centralized error handling with consistent logging
  - Enhanced JSDoc documentation for all functions
  - Improved DOM element validation with null checks
  - Better separation of concerns with dedicated functions
  - Enhanced error state management
  - More robust error handling throughout
- Update License date
- Update documentation

## 1.2.3

- Add extension id to manifest

## 1.2.2

- Add Github Action to publish new releases
- Updated Options page layout and styles
- Updated documentation

## 1.0.1

- TickTick in Sidebar has been approved in the AMO.
- v1.0.1 is the initial release to AMO website.

## 1.0.0

- Initial release
