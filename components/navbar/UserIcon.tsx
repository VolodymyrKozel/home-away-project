import { LuUser2 } from "react-icons/lu";

import { fetchProfileImage } from "@/utils/actions";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  return profileImage ? (
    <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
  ) : (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
  );
};

export default UserIcon;
