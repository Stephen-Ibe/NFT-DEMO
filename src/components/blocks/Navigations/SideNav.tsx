import React, { ReactNode } from "react";
import { Box, NavLink } from "@mantine/core";
import { HiCollection } from "react-icons/hi";
import { GiCrossedChains } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { GoDash } from "react-icons/go";

type AllSidebarLinksType = {
    uid: number;
    title: string;
    icon: ReactNode;
    children: { id: number; label: string }[];
};

const AllSidebarLinks: AllSidebarLinksType[] = [
    {
        uid: 0,
        title: "Collections",
        icon: <HiCollection size="1rem" />,
        children: [
            { id: 0, label: "Sample Collection 01" },
            { id: 1, label: "Sample Collection 02" },
        ],
    },
    {
        uid: 1,
        title: "Chains",
        icon: <GiCrossedChains size="1rem" />,
        children: [
            { id: 0, label: "Sample Chain 01" },
            { id: 1, label: "Sample Chain 02" },
            { id: 2, label: "Sample Chain 03" },
        ],
    },
    {
        uid: 2,
        title: "Price",
        icon: <MdOutlinePriceChange size="1rem" />,
        children: [
            { id: 0, label: "Free" },
            { id: 1, label: "Paid" },
        ],
    },
];

const SideNav = () => (
    <div>
        <Box>
            {AllSidebarLinks.map(
                ({ children, icon, uid, title }: AllSidebarLinksType) => (
                    <NavLink
                        label={title}
                        icon={icon}
                        childrenOffset={28}
                        key={uid}
                    >
                        {children.map(
                            ({ id, label }: { id: number; label: string }) => (
                                <NavLink
                                    label={label}
                                    icon={<GoDash />}
                                    key={id}
                                />
                            )
                        )}
                    </NavLink>
                )
            )}
        </Box>
    </div>
);

export default SideNav;
