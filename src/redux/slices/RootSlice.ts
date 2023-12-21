import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        ISBN: "ISBN",
        author: "Author",
        book_length: "Book Length",
        book_title: "Book Title",
        cover_type: "Cover Type",
    },
    reducers: {
        chooseISBN: (state, action) => { state.ISBN = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseLength: (state, action) => { state.book_length = action.payload},
        chooseTitle: (state, action) => { state.book_title = action.payload},
        chooseCover: (state, action) => { state.cover_type = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseAuthor, chooseLength, chooseTitle, chooseCover} = rootSlice.actions