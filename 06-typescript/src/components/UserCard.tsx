export type UserCardProps = {
  user: {
    username: string
    image: string
    email: string
    company?: {
      department?: string
    }
  }
  getDepartmentClass: (department: string) => string
}

function UserCard({ user, getDepartmentClass }: UserCardProps) {
  return (
    <div
      role="contentinfo"
      className={`border-2 rounded-lg p-4 border-white
      ${getDepartmentClass(user.company?.department || 'bg-neutral-400')}
    `}
    >
      <img
        className="w-full p-8"
        src={user.image}
        alt={`${user.username} image`}
      />
      <p className="text-lg text-white font-bold">{user.username}</p>
      <p className="text-base font-medium text-slate-600">
        {user.company?.department}
      </p>
      <p className="text-base font-medium text-slate-600">{user.email}</p>
    </div>
  )
}

export default UserCard
