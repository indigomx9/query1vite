import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Main } from "../routes/Main";

const RQClient = new QueryClient();

export const App = () => {
    return (
        <React.Fragment>
            <QueryClientProvider client={RQClient}>
                <Main />
                <ReactQueryDevtools 
                    initialIsOpen={false} 
                    position="bottom-right" 
                />
            </QueryClientProvider>
        </React.Fragment>
    );
};


