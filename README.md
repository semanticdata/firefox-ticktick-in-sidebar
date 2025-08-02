# ![TickTick logo](src/icons/32x32.png) TickTick in Sidebar

![Mozilla Add-on](https://img.shields.io/amo/v/{6930c4ab-262a-4e93-a3fa-562714cabb3f})
![Add-on rating](https://img.shields.io/amo/rating/{6930c4ab-262a-4e93-a3fa-562714cabb3f})
![Add-on downloads](https://img.shields.io/amo/dw/{6930c4ab-262a-4e93-a3fa-562714cabb3f})
![Add-on users](https://img.shields.io/amo/users/{6930c4ab-262a-4e93-a3fa-562714cabb3f})
![License](https://img.shields.io/github/license/semanticdata/firefox-ticktick-in-sidebar)

Transform how you handle messaging and browsing. Instead of constantly switching between apps, keep both open simultaneously. Research something? Share it instantly. Reading an article? Chat about it without losing your spot.

## What you get

- No more tab switching
- True multitasking setup
- Customizable shortcuts and toolbar button
- Sidebar Telegram access (**Alt+Shift+K**)

[![Get the Addon](https://raw.githubusercontent.com/semanticdata/text-revealer-firefox-extension/master/firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/ticktick-in-sidebar/)

## How to Use

### Keyboard Shortcut (Recommended)

- Press **Alt+Shift+K** to open TickTick in the sidebar
- Press **Alt+Shift+K** again to close it
- Customize the shortcut in _Add-ons → TickTick in Sidebar → Options_

### Toolbar Button

- Click the TickTick icon in your Firefox toolbar to toggle Ticktick in the sidebar

## How to Unlock Firefox Sidebar Width (the short version)

The sidebar's width is _locked by default_ in Firefox. Unfortunately, the sidebar is very restrictive and I can only do so much to enhance the functionality of this extension. I put together a step-by-step guide on how to unlock it.

### Step-by-Step Instructions

1. In a new tab, navigate to `about:support`.
2. Under _Application Basics_, find _Profile Folder_.
3. Locate and click the `Open Folder` button next to it. It will be next to an address similar to: `%appdata%\Mozilla\Firefox\Profiles\{profile-id}.default`.
4. Inside your Firefox _Profile Folder_, create a new folder named: `chrome`.
5. Inside the newly created chrome folder, create a new file named: `userChrome.css`.
6. Copy the following code, paste as content and save:

```css
#sidebar-box {
  max-width: 40% !important;
  min-width: 300px !important;
}
```

7. Finally, in a new tab, navigate to `about:config` and search for `toolkit.legacyUserProfileCustomizations.stylesheets` and change it to `true`.
8. Restart Firefox and test it out!

### 📝 Additional Notes

- You can find the canonical publication for the guide on my [digital garden](https://forgetfulnotes.com/Tutorials/Unlock-Firefox-Sidebar).
- I also have instructions in Spanish in this GitHub [Gist](https://gist.github.com/semanticdata/ee0bca4f3617241aa98da114653c0b08#file-instrucciones-md).

## 💜 Acknowledgments

Icons used for all my extensions are part of [UXWing](https://uxwing.com/)'s collection. Take a look at their [license](https://uxwing.com/license).

## Disclaimer

_Independent open source project—not affiliated with TickTick. Just making Firefox a bit more convenient for everyday productivity._

## © License

Source code in this repository is available under the [MIT License](LICENSE).
