The scope of this demo is to illustrate an issue with `react-router` and INP. Until React renders the entire component tree for the new route, the page is unresponsive.

https://github.com/kevinfarrugia/react-router-inp/assets/8075326/398f6aad-a686-479a-b1b5-dbd11e0d0058

The above video illustrates that the URL changes immediately on click, but the page UI is not updated until the entire tree (containing a large list of kittens) is rendered.

![react-router-inp](https://github.com/kevinfarrugia/react-router-inp/assets/8075326/f1481208-f775-49d8-b1ce-dbfb6d5596f4)

The above screenshot of the Chrome DevTools Performance Profiler shows that the interactions are lengthy and most of the effort is spent on React's `performSyncWorkOnRoot`.
