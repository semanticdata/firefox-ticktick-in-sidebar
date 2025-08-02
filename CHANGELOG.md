# Changelog

## 1.3.0

- Update from Manivest v2 to Manifest v3
  - Changed `browserAction` to `action`
  - Removed deprecated `browser_style`
  - Renamed old names from extension template
  - Add better error handling
  - Update to use async/await more consistently
- Refactor Options page
  - Update to use semantic HTML
  - Styled the page with only CSS
  - Added new heart icon
  - Removed external dependecies (Font Awesome, Bulma)
  - Simplified validation logic and removed unnecessary complexity
  - Added user feedback with status messages for success/error states
  - Improved error handling with try-catch blocks
- Improve background script
  - Remove DOM manipulation from service worker context
  - Add proper error handling for sidebar toggle functionality
  - Clean up duplicate code between background and options scripts
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
