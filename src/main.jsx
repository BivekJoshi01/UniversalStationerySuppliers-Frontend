import React from "react";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Aos from "aos";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
Aos.init({
  once: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          highProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
