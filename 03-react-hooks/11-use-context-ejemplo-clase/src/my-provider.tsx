
import React from "react";

interface UserContext {
    username: string;
    setUsername: (username: string) => void;
}

export const MyContext = React.createContext<UserContext>({
    username: "John",
    setUsername: () => {
        console.log(
            "Heyy! Te has olvidado de meter el provider en tu jerarquía de componentes"
        );
    },
});

interface Props {
    initialUsername: string;
    children: React.ReactNode;
}

export const MyProvider: React.FC<Props> = (props: Props) => {
    const { children, initialUsername } = props;
    const [username, setUsername] = React.useState(initialUsername);

    const handleChange = (username: string) => {
        if (username !== "Pepe") {
            setUsername(username);
        } else {
            setUsername("No permitido");
        }
    };

    console.log(username);

    return (
        <MyContext.Provider value={{ username, setUsername: handleChange }}>
            {children}
        </MyContext.Provider>
    );
};
