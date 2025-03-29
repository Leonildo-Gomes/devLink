import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
export function Header() {
  async function handleLogout() {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem("@reactLinks");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full bg-white  h-12 flex items-center justify-between rounded-md px-3">
        <ul className="flex gap-4 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Links</Link>
          </li>
          <li>
            <Link to="/admin/social">Redes Sociais</Link>
          </li>
        </ul>

        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#db2629" />
        </button>
      </nav>

      {/* Add more links here */}
    </header>
  );
}
