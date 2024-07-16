# HashMap and HashSet Implementation

## Overview

This repository contains JavaScript implementations of HashMap and HashSet data structures.

- **HashMap:** Allows efficient insertion, deletion, and retrieval of key-value pairs. Handles collisions using separate chaining with linked lists.
- **HashSet:** Stores unique keys with no values, leveraging the HashMap implementation for efficient storage and retrieval.

## Features

### HashMap

- **set(key, value):** Adds or updates a key-value pair in the HashMap.
- **get(key):** Retrieves the value associated with the given key.
- **has(key):** Checks if the HashMap contains a specific key.
- **remove(key):** Removes a key-value pair from the HashMap.
- **keys():** Returns an array of all keys in the HashMap.
- **values():** Returns an array of all values in the HashMap.
- **entries():** Returns an array of key-value pairs (entries) in the HashMap.
- **clear():** Clears all entries from the HashMap.

### HashSet

- **add(key):** Adds a key to the HashSet.
- **has(key):** Checks if the HashSet contains a specific key.
- **remove(key):** Removes a key from the HashSet.
- **keys():** Returns an array of all keys in the HashSet.
- **clear():** Clears all keys from the HashSet.
