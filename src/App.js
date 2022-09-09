import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import useForecast from "./hooks/useForecast";
import Error from "./components/error/Error";
import Loader from "./components/loader/Loader";
import Forecast from "./components/forecast/Forecast";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <div className="container">
      <Header />
      {!isLoading && <Search submitSearch={onSubmit} />}
      {isError && <Error message={isError} />}
      {isLoading && <Loader />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
