import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query";
import {UserContextProvider} from "./components/contexts/UserContext.jsx";
import {NotificationContextProvider} from "./components/contexts/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <NotificationContextProvider>
            <UserContextProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </UserContextProvider>
        </NotificationContextProvider>
    </Router>,
);
