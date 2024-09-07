import Image from "next/image";

type UserButtonProps = {
  imageUrl?: string;
  size?: number;
};

const UserAvatar = ({ imageUrl }: UserButtonProps) => {
  const hasImage = imageUrl && imageUrl.trim() !== "";

  return (
    <div className="relative inline-block size-8 overflow-hidden rounded-full">
      {hasImage ? (
        <Image
          src={imageUrl}
          alt="User Avatar"
          layout="fill"
          className="object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-muted text-xs font-medium text-white"></div>
      )}
    </div>
  );
};

export default UserAvatar;
