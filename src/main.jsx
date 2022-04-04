import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Books from "./routes/Books";
import AddBook from "./routes/AddBook";
import FindBook from "./routes/FindBook";
import NoMatch from "./routes/NoMatch";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/books" element={<Books/>} />
        <Route path="/add_book" element={<AddBook/>} />
        <Route path="/find_book" element={<FindBook/>} />
      </Route>
      <Route
        path="*"
        element={<NoMatch/>}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);