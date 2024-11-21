"use client";

import React from 'react';

const TelegramWidget = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const { chatId } = event.target;
        console.log("User logged in with chat ID:", chatId);
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <script async src="https://telegram.org/js/telegram-widget.js?7"
                    data-telegram-login="Mytelebot" // bot's username
                    data-size="large"
                    data-radius="10"
                    data-auth-url="http://localhost:3000/api/auth" // auth endpoint
                    //data-payload="some_payload" // Optional payload
                    data-userpic="false"
                    data-lang="en"
                    data-color="#0088cc"
                    data-color-hover="#0077b3"
                    data-color-active="#006699"
                    data-shape="round">
                </script>
            </form>
        </div>
    );
};

export default TelegramWidget;