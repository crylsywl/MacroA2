import Button from "../Elements/Button/Index";

const ProfileLayouts = (props) => {
    const { classnameOfRiwayat, classnameOfEdit,  } = props;
    return (
        <div className="font-sans">
            <img className="w-full mt-[64px] h-[250px] object-cover" src="/src/assets/Banner.jpg" />
            <img className="rounded-full absolute object-cover w-[185px] h-[185px] top-[193px] left-[270px] translate-x-[-50%]" src="/src/assets/Profile.jpg" alt="" />
            <div className="flex flex-col gap-2 absolute top-[400px] left-[150px]">
                <Button Type="Link" to={"/riwayat"} classname={`shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] flex justify-center items-center w-[250PX] ${classnameOfRiwayat}`}>Riwayat </Button>
                <Button Type="Link" to={"/editprofile"} classname={`shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] flex justify-center items-center w-[250PX] ${classnameOfEdit}`}>Edit Profile</Button>
            </div>
        </div>
    )
}

export default ProfileLayouts