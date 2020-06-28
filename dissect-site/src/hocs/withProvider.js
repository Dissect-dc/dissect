import {Provider} from "react-redux";
import {Gw2ThemeProvider} from "gw2-ui-components";
import React from "react";
import {getStore} from "../pages";

const store = getStore()

export default (html) => (
    <>
        <Provider store={store}>
            <Gw2ThemeProvider>
                {html}
            </Gw2ThemeProvider>
        </Provider>
    </>
);