<h1 align="center">
  Hyperapp site generator starter
</h1>

#### Live demo:   
https://hyperapp-site-generator-starter.netlify.com/


## 🚀 Quick start: 
[Click here to use this template](https://github.com/loteoo/hyperapp-site-generator-starter/generate), or run these commands:  
```
# Clone project
git clone https://github.com/loteoo/hyperapp-site-generator-starter.git

cd hyperapp-site-generator-starter

npm install         # Install dependencies
npm start           # Dev server + live reload
```

Or use a [.zip download](https://github.com/loteoo/hyperapp-site-generator-starter/archive/master.zip)  


#### Building your site : 
```
# Build for production and generate service worker
npm run build

# Build for production, generate service worker AND pre-render pages
npm run render-pages
```

## Features
- Cutting edge code-splitting and bundle loading layer using the [Hyperapp site generator](https://hyperapp-site-generator-demo.netlify.com/)  
- Uses [Parcel](https://parceljs.org/) for compilation, dev server and hot module reloading...  
- Works offline out of the box using [workbox](https://developers.google.com/web/tools/workbox/) to generate service workers and precache application files  
- PWA/SPA ready with a default web app manifest  
- Sane CSS defaults using [sanitize.css](https://csstools.github.io/sanitize.css/), a best-practices CSS reset  
- Uses the [Standard](https://standardjs.com/) JavaScript style guide with eslint  
-  Automatic import of the `h` function (say goodbye to that `h` import!)  
- [JSX](https://reactjs.org/docs/introducing-jsx.html) and all of the ES6-7-8-9 goodies are ready to go thanks to Parcel.  


## File structure
Proposed folder structure as your project grows. Adapt it to your needs.  

```
├── dist/                             # Compiled static files (build output)
├── src/                              # Application source code
│   ├── app/                          # App files
│   │   ├── pages/                    # Site pages
│   │   ├── components/               # Other components
│   │   │   ├── {ComponentName}/      # Advanced component with multiple files
│   │   │   │   ├── actions.js        # Local actions
│   │   │   │   ├── index.jsx         # Exported view
│   │   │   │   ├── init.js           # Initial local state
│   │   │   │   ├── style.css         # Component styles
│   │   │   │   └── other.svg         # Other related files (which are only used by the component)
│   │   │   └── {ComponentName}.jsx   # Single file component
│   │   ├── actions.js                # Global actions
│   │   ├── init.js                   # Initial app state
│   │   ├── routes.js                 # Route patterns
│   │   └── view.jsx                  # Root view
│   ├── app.js                        # Hyperapp instantiation
│   ├── global.css                    # Global styles
│   ├── index.html                    # Parcel entry
│   └── manifest.webmanifest          # Web app manifest
├── static/                           # Files to be copied in dist folder
├── ...
...
```



---  




This starter project was based on this [Hyperapp boilerplate](https://github.com/loteoo/hyperapp-boilerplate). The site-generator and a few pages was then added in.


