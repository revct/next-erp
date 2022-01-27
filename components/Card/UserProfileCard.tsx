import Image from "next/image";
import useUserStore from "~/store/user";

const UserProfileCard = () => {
  const user = useUserStore();
  return (
    <div className="card shadow-lg compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <Image
                src={user.info.avatarUrl}
                width={40}
                height={40}
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.info?.email}</h2>
          <p className="text-base-content text-opacity-40">{user.info?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
