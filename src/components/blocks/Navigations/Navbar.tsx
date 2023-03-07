import React, { useState } from "react";
import { Burger } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <header>
            <nav>
                <Link to="!#">NFT.</Link>
            </nav>
            <nav className="md:hidden px-4">
                <Burger
                    opened={opened}
                    onClick={() => setOpened(prevState => !prevState)}
                />
            </nav>
        </header>
    );
};

export default Navbar;
