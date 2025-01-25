import React from "react";

import { Movie } from "@/api/movies";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const dataCard = ({ data }: { data: Movie }) => {
  return (
    <Card key={data.id}>
      <CardHeader
        style={{
          backgroundImage: `url(${
            process.env.IMAGE_URL + "original/" + data.backdrop_path
          })`,
        }}
      >
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.title}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardDescription>{data.release_date}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default dataCard;
