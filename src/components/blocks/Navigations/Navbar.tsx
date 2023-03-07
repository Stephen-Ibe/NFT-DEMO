/* eslint-disable react/no-unused-prop-types */
import React, { useState } from "react";
import { Avatar, Burger, TextInput } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

type NavLinksTypes = {
    id: number;
    name: string;
    url: string;
};

const NavLinks = [
    {
        id: 0,
        name: "Market",
        url: "/market",
    },
    {
        id: 0,
        name: "Developer",
        url: "/developer",
    },
] as NavLinksTypes[];

const Navbar = () => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <header className="shadow">
            <section className="top--nav nft--container">
                <nav>
                    <h1 className="top--nav-logo">
                        <Link to="!#">NFT.</Link>
                    </h1>
                </nav>
                <form className="sm:w-6/12">
                    <TextInput
                        icon={<FaSearch size="1rem" />}
                        placeholder="Search NFT..."
                    />
                </form>
                <nav className="hidden md:block">
                    <ul className="top--nav-items">
                        {NavLinks.map(({ id, name, url }: NavLinksTypes) => (
                            <li key={id}>
                                <NavLink
                                    to={url}
                                    className={({ isActive }) =>
                                        isActive ? "isActive" : undefined
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                        <div className="top--nav-actions">
                            <Avatar radius="xl" color="blue">
                                <FaShoppingCart />
                            </Avatar>
                            <Avatar radius="xl">
                                <FaUser />
                            </Avatar>
                        </div>
                    </ul>
                </nav>
                <nav className="md:hidden px-4">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(prevState => !prevState)}
                    />
                </nav>
                {opened && (
                    <nav className="mobile--nav">
                        <ul className="">
                            {NavLinks.map(
                                ({ id, name, url }: NavLinksTypes) => (
                                    <li key={id} className="border">
                                        <NavLink
                                            to={url}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "isActive"
                                                    : undefined
                                            }
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                )}
            </section>
        </header>
    );
};

export default Navbar;
