# KatKin's Full-stack Coding Test 🐱

Cheers for a fun task, really enjoyed it.
Been meaning to play around with turbo repo more so was a good excuse 🚀

## To run

- `npm i`
- `npm run dev`
- `http://localhost:5173/`

### Todo’s

Things I ran out of time for

- I ran out of time so wasn’t able to do any tests and also the types are quite loose, sorry.
- Also, not great code structure / organisation (particularly the comms service).
- All the UI is from Chakra instead of any of my own styles.
- Only managed to copy the very basic layout from the Figma file. Any theming would have been nice to do in the `theme` prop in the Chakra Provider.

### Improvements

- It’s not super robust, no good handling for errors or empty incorrect data. Implementing `react-error-boundary` would have been nice. And `zod` to validate data coming in.
- Some shared types between api and client
- The `comms.utils.ts` is very messy, I normally compose little functional util functions (loadash / ramda)
