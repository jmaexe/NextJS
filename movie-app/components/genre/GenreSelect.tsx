import { getMovieGenres } from "@/api/genres";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import ButtonTheme from "../ButtonTheme";
type GenreSelectProps = {};

const GenreSelect = async ({}: GenreSelectProps) => {
  const genres = await getMovieGenres();
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent className="">
        {genres.map((genre, i) => (
          <SelectItem key={i} value={genre.id.toString()}>
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GenreSelect;
