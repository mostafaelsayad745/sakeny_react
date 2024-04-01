import useFetchUsers from "../../hooks/usersHooks";

const UsersList = () => {
    const {data} = useFetchUsers();
    return (
        <div>
            {data && data.map(u => <div key={u.userId}>{u.userFullName}</div>)}
        </div>
    )
}
export default UsersList;