import ChooseGenre from './chooseGenre';
import ChooseTime from './chooseTime';
import ChooseRating from './chooseRating';
import DisplayMovieOutput from './displayMovieOutput';

export default function App() {
  return (
    <>
      <ChooseGenre />
      <ChooseTime />
      <ChooseRating />
      <DisplayMovieOutput />
    </>
  )
}