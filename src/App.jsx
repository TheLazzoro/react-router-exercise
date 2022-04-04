import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/books">Books</Link> |{" "}
        <Link to="/add_book">Add Book</Link> |{" "}
        <Link to="/find_book">Find Book</Link>
      </nav>
      <Outlet />
    </div>
  );
}