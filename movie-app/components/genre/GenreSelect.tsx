import { getMovieGenres } from "@/api/genres";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type GenreSelectProps = {};

const GenreSelect = async ({}: GenreSelectProps) => {
  const genres = await getMovieGenres();
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        {genres.map((genre, i) => (
          <SelectItem key={i} value={genre.name}>
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GenreSelect;
