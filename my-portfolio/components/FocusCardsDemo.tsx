import { FocusCards } from "@/components/ui/focus-cards";
import { c_logo, cpp_logo, java_logo } from "@/public";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      image: c_logo,
    },
    {
      title: "Valley of life",
      image: cpp_logo,
    },
    {
      title: "Sala behta hi jayega",
      image: java_logo,
    },
  ];

  return <FocusCards cards={cards} />;
}
