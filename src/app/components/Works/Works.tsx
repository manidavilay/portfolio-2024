"use client";
import ItemsLayout from "@/app/layouts/Items/ItemsLayout";

interface Props {
    isItemOpened: boolean;
    setIsItemOpened: (value: boolean) => void;
    setOpenedItem: (item: string | null) => void;
}

const Works = ({isItemOpened, setIsItemOpened, setOpenedItem}: Props) => {
    return (
        <ItemsLayout isItemOpened={isItemOpened} setIsItemOpened={setIsItemOpened} setOpenedItem={setOpenedItem}>
            test
        </ItemsLayout>
    )
}

export default Works