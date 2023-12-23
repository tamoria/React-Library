import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseISBN, chooseAuthor, chooseLength, chooseTitle, chooseCover } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.book_title } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseISBN(data.ISBN));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseLength(data.book_length));
      dispatch(chooseTitle(data.book_title));
      dispatch(chooseCover(data.cover_type));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="ISBN">ISBN</label>
          <Input {...register('ISBN')} name='ISBN' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="book_length">Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="Book Length" />
        </div>
        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Book Title" />
        </div>
        <div>
          <label htmlFor="cover_type">Cover Type</label>
          <Input {...register('cover_type')} name='cover_type' placeholder="Cover Type" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm