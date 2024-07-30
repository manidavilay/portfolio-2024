import ItemsLayout from "@/app/layouts/Items/ItemsLayout"

interface Props {
    isItemOpened: boolean;
    setOpenedItem: (item: string | null) => void;
}

const SpotifyLogin = ({ isItemOpened, setOpenedItem }: Props) => {
    return (
        <ItemsLayout isItemOpened={isItemOpened} setOpenedItem={setOpenedItem}>
                <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify 
                </a>
        </ItemsLayout>
    )
}

export default SpotifyLogin