// HomePage.jsx
import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import Faq from "./Faq";

const HomePage = () => {
  const { user } = useAuthStore();

  return (
    <>
      {user ? (
        <HomeScreen />
      ) : (
        <>
          <AuthScreen />
          <Faq /> {/* FAQ hanya muncul kalau belum login */}
        </>
      )}
    </>
  );
};

export default HomePage;
