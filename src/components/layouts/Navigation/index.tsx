import { Link } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">indexへ!</Link>
      <Link to="/about">aboutへ!</Link>
    </nav>
  );
};
