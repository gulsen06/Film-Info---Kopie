import FilmYear from "../components/FilmYear";
import { data } from "../helper/data";

const Main = () => {
  return (
    <div className=" anasayfa container">
      <div>
        <FilmYear data={data} />
      </div>
    </div>
  );
};

export default Main;
