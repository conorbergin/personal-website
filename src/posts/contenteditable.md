---
title : How I built a text editor with contenteditable
date: "2023-09-19"
tags:
  - webdev
---

Around March this year I decided I was going to build a note-taking app, having never been quite satisfied with what was on offer. I spent about six months on the project before shelving it. It was my first serious attempt to build a user facing service and I decided what I had achieved wasn't quite as revoltionary as I though it was when I was building it, maybe I will come back to it in the future.

## Prosemirror
If you ask online how to create a rich text editor you will be directed to Prosemirror or one of its derivatives. These work great out of the box, and collaboration is very easy to set up with Yjs. However, customizing Prosemirror is hard, so hard that I started writing my own contenteditable editor from scratch. In particular I wanted:
- Drag handles that used PointerEvents, not the drag and drop api, so they could be used on touchscreens
- A mixture of syntax highlighting and rich text
- Relative headings that can opened as their own document

While I wouldn't be surprised to hear that all of these are possible, even easy, with Prosemirror or some other editor framework, I wasn't making any progress and I tend to avoid asking questions online.

## Yjs
I wanted to be able to sync my application state between devices. I looked at a few different ways of doing this, such as storing the state as text files and syncing with a VCS. CRDTs were the newest, most theoretically complex, and bizarrely the easiest to use. Yjs was the obvious choice because it already had bindings for every popular text editing framework, giving me plenty of prior art.

## `beforeinput`
I am lucky in that when I started writing my editor, `beforeinput` was widely supported.
Rather than handling every keypress you can handle more abstract events like `insertText` or `deleteContentBackward`, making it much easier to support other languages, keyboard layouts, and input methods. 

The core of my editor looks something like this, obviously greatly simplified, but the principle is the same. Preventing default on all events foces me to handle every update to my state.

```js
const my_doc = ydoc.getText('my document')

root_element.onbeforeinput = (event) => {
    e.preventDefault()
    const offset = getCaretPosition()
    switch (event.inputType) {
        case 'insertText':
            my_doc.insert(offset,e.data)
            return
        case 'deleteContentBackward':
            if (offset !== 0) { my_doc.delete(offset-1,1) }
            return
        default:
            return
    }
}
```

## Selection
One of the tricker parts of this project was finding where the text cursor, or caret, is. There wasn't any nice beforeinput feature for this, I had to read the slection from the DOM, and convert that to a Yjs document position. This is one of the messiest parts of my project, and `selection.ts` still contains large piece of code pulled as-is from stack overflow.

## Rendering
Up until this point I was rolling my own javascript renderer, which was a real pile of junk that redrew the entire page every time the state changed. I was faced with writing a proper renderer or submitting to a UI library. I settled on Solid after also trying Svelte and React, Svelte is a bit too magical and React is too old and well supported for my taste. Using Solid was a big boost to my productivity, it never made it difficult to drop down to the underlying web apis, which I did a lot, and being able to declare my components in JSX, rather than abusing `Object.assign()` really cleaned up my code. I am still not sure if Solid was a better choice than React or Svelte, there were a few third party libraries in each I would have liked to have, in particular SyncedStore.



## Drag and Drop
There is a Drag and Drop Html5 api, but no mobile browsers support it and it isn't very flexible. If you wan't proper DnD you will need to look to your framework, or roll your own. I went with my own implementation, which involved listening to pointerevents (works with touch and mouse), creating a dummy copy of the element when the drag handle is pressed, making the dummy follow the pointer, and listening for a pointerup event. When the pointerup event fires, I check if the drop location is valid, and if so I update my state and the dom updates, if not I don't update my state and the dom resets to what it was before.

```js
draghandle.onpointerdown = (event) => {
    // style the element as a grey box
    // create an overlay
    // attact a copy of the element to he mouse pointer

    const handlePointerMove = (e) => {
        // set the coords of the overlay to match pointer
        // if in a valid drop location move the box to it
        
    }

    const handlePointerUp = (e) => {

        // make any state changes needed

        //cleanup
        document.body.removeEventListener(handlePointerMove)
        document.body.removeEventListener(handlePointerUp)

    }

    document.body.addEventListener(handlePointerMove)
    document.body.addeventListener(handlePointerUp)
}
```

## Conclusion
Writing a text editor with contenteditable is surprisingly approachable, a lot of the info is very new so you won't find many tutorials on the subject, read this [spec](https://w3c.github.io/input-events/) and have a look at [Slate](https://www.slatejs.org/examples/richtext).
