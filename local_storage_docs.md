# Local Storage Implementation Documentation

This document explains the logic added to the application to support saving and removing media items (photos, videos, GIFs) using browser `localStorage`. 

## 1. Saving Items to Local Storage (`resultcard.jsx`)

When a user clicks **Save** on a search result, the system invokes the `addtocollection` function. 

### Implementation Steps:
1. **Retrieve existing data:** It first attempts to retrieve the array of items currently stored under the key `"collection"` using `localStorage.getItem("collection")`. If it doesn't exist, it defaults to an empty array `[]`.
2. **Prevent Duplicates:** It uses JavaScript's `.some()` method to check if the current item's `id` already exists in the retrieved array.
3. **Save Data:** If the item is not a duplicate, it is appended to the existing array. The updated array is converted to a string format using `JSON.stringify()` and saved back to `localStorage.setItem("collection", newcollection)`.

```javascript
const addtocollection = (item) => {
    // 1. Retrieve old data or default to empty array
    const oldata = JSON.parse(localStorage.getItem("collection")) || []
    
    // 2. Check for duplicate to avoid adding the same item multiple times
    const isDuplicate = oldata.some((savedItem) => savedItem.id === item.id)
    
    // 3. Save if condition passes
    if (!isDuplicate) {
        const newcollection = [...oldata, item]
        localStorage.setItem("collection", JSON.stringify(newcollection));
        alert("Added to collection!");
    } else {
        alert("Item is already in your collection!");
    }
}
```

## 2. Rendering Saved Items (`collection.jsx`)

The Collection page serves as the user's personal gallery of saved media. 

### Implementation Steps:
1. **State Initialization:** A piece of state called `savedItems` is initialized to hold the array of items.
2. **Retrieval via `useEffect`:** A `useEffect` hook runs once when the component first mounts. It fetches the `"collection"` string from `localStorage`, parses it back into an array using `JSON.parse()`, and sets it to the local `savedItems` state.
3. **Rendering Elements:** It maps through the `savedItems` state to render the media using the same `ResultCard` component. However, it passes a special prop `isCollection={true}` to alter the behavior and UI of the card.

```javascript
const [savedItems, setSavedItems] = useState([])

useEffect(() => {
    // Retrieve data from localStorage when the page loads
    const items = JSON.parse(localStorage.getItem("collection")) || []
    setSavedItems(items)
}, [])
```

## 3. Removing Items from Local Storage (`collection.jsx` & `resultcard.jsx`)

For a complete feature, users need the ability to unsave/remove items from their collection.

### Implementation Steps:
1. **The 'Remove' Logic:** Inside `collection.jsx`, a function named `handleRemove` takes an item's `id`. It uses the `.filter()` method to create a new array containing all items *except* the one with that specific `id`.
2. **State & Storage Synchronization:** This newly filtered array updates both the React `savedItems` state and is overwritten in the `localStorage`.
3. **Prop Handling:** The `ResultCard` checks the `isCollection` boolean prop. If `true`, it renders a red **Remove** button instead of a green **Save** button. Clicking the **Remove** button triggers the `handleRemove` function passed down via props.

```javascript
// collection.jsx
const handleRemove = (id) => {
    // Filter out the item to be removed
    const updatedItems = savedItems.filter(item => item.id !== id)
    
    // Update local React state and storage
    setSavedItems(updatedItems)
    localStorage.setItem("collection", JSON.stringify(updatedItems))
}
```

> [!TIP]
> **Why `localStorage`?** 
> Local storage provides a simple way to store data across browser sessions without needing a backend database. The data remains saved on the user's specific browser until manually cleared.
