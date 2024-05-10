import React from "react";

export const MenuIcon = ({open}) => {
    return (
        <>
            <span className="assets-MenuIcon" style={{ opacity: open ? "0" : "1" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    width="40"
                >
                    <path
                        d="M6.375 30q-.583 0-.979-.396T5 28.625q0-.625.396-1.021.396-.396.979-.396h27.25q.583 0 .979.417t.396 1q0 .583-.396.979t-.979.396Zm0-8.625q-.583 0-.979-.396T5 20q0-.583.396-.979t.979-.396h27.25q.583 0 .979.396T35 20q0 .583-.396.979t-.979.396Zm0-8.583q-.583 0-.979-.417t-.396-1q0-.583.396-.979T6.375 10h27.25q.583 0 .979.396t.396.979q0 .625-.396 1.021-.396.396-.979.396Z"
                    />
                </svg>
            </span>
            { /* //https://github.com/google/material-design-icons/blob/master/symbols/web/menu/materialsymbolsrounded/menu_40px.svg */ }
            <span className="assets-MenuIcon" style={{ opacity: open ? "1" : "0" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    viewBox="0 -960 960 960"
                    width="40"
                >
                    <path
                        d="M480-433.33 274.67-228q-9.67 9.67-23.34 9.67-13.66 0-23.33-9.67-9.67-9.67-9.67-23.33 0-13.67 9.67-23.34L433.33-480 228-685.33q-9.67-9.67-9.67-23.34 0-13.66 9.67-23.33 9.67-9.67 23.33-9.67 13.67 0 23.34 9.67L480-526.67 685.33-732q9.67-9.67 23.34-9.67 13.66 0 23.33 9.67 9.67 9.67 9.67 23.33 0 13.67-9.67 23.34L526.67-480 732-274.67q9.67 9.67 9.67 23.34 0 13.66-9.67 23.33-9.67 9.67-23.33 9.67-13.67 0-23.34-9.67L480-433.33Z"
                    />
                </svg>
            </span>
            {/* https://github.com/google/material-design-icons/blob/master/symbols/web/close/materialsymbolsrounded/close_40px.svg */}
        </>
    );
};