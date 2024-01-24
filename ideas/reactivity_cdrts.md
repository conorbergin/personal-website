# Reactivity with CRDTs

A user looks at their screen and they see data, or maybe they hear data, data which has been transformed into some sort of intermediate representation that both they and the computer can process.

Programs which display static data, ebooks, pdfs, images, are comparitively straight forward, you c..

# A text editor, in ascending complexity.

1. Use a text area, or a text editor widget, and two buttons, a save button and a load button. When you click save the contexts of th text area are save t a file on disk

2. Auto save

3. Continuous auto save. 

# Sync

1. load
2. cloud storage
3. CRDT storage

# Electric SQL

# update only Y-CRDT (Rust Yjs)

What if we were to cut out the middleman, so to speak, and use our CRDT to directly update our state.

We would need to instance our web componenet with our CRDT state, and then apply updates.

Y-CRDT has a delta format which can encode an update to an exisiting state. For example a YArray update might be {retain 4, add {itemA, itemB}, retain 6, remove 3}.

Then I though, what if I only write code to process updates, and load my document into memeory _after_ I attact my event listeners. The the initial load of the doumnet is an instance 