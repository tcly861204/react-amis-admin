amis.require.resourceMap({
  "res": {
    "loadMonacoEditor.ts": {
      "url": "/loadMonacoEditor.js",
      "type": "js"
    },
    "route/NotFound.tsx": {
      "url": "/route/NotFound.js",
      "type": "js"
    },
    "component/AMISRenderer.tsx": {
      "url": "/component/AMISRenderer.js",
      "type": "js"
    },
    "component/AddPageModal.tsx": {
      "url": "/component/AddPageModal.js",
      "type": "js",
      "deps": [
        "component/AMISRenderer.tsx"
      ]
    },
    "route/Preview.tsx": {
      "url": "/route/Preview.js",
      "type": "js",
      "deps": [
        "route/NotFound.tsx",
        "component/AMISRenderer.tsx",
        "component/AddPageModal.tsx"
      ]
    },
    "node_modules/amis-editor/node_modules/sortablejs/Sortable.min": {
      "url": "/node_modules/amis-editor/node_modules/sortablejs/Sortable.min.js",
      "type": "js"
    },
    "node_modules/amis-editor/dist/index.min": {
      "url": "/node_modules/amis-editor/dist/index.min.js",
      "type": "js",
      "deps": [
        "node_modules/amis-editor/node_modules/sortablejs/Sortable.min"
      ]
    },
    "route/Editor.tsx": {
      "url": "/route/Editor.js",
      "type": "js",
      "deps": [
        "node_modules/amis-editor/dist/index.min"
      ]
    }
  },
  "pkg": {}
});