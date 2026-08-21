import type { UserProfileCardProps } from "../../types";

export const UserProfileCard = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <div className="flex items-center gap-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-600">
              {user.name.charAt(0)}
            </span>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>

          {showEmail && (
            <p className="text-gray-600">{user.email}</p>
          )}

          {showRole && (
            <p className="text-blue-600">{user.role}</p>
          )}
        </div>
      </div>

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}

      {children && (
        <div className="mt-4 border-t pt-4">
          {children}
        </div>
      )}
    </div>
  );
};