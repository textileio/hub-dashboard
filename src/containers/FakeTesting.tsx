import { useStore } from "../store/Provider";

const FakeTesting = () => {
  const [{ user, hub, loading }, actions] = useStore();
  return (
    <div>
      First Name:
      {user?.firstName} <br />
      With a count of {hub?.count} and is {loading ? "" : "not"} loading:
      <br />
      <button
        type="button"
        onClick={() => actions.fetchPerson(Math.floor(Math.random() * 12) + 1)}
      >
        Fetch
      </button>
      <button type="button" onClick={actions.increment}>
        Increment
      </button>
    </div>
  );
};

export default FakeTesting;
