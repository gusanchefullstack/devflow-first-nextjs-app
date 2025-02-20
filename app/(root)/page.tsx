import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/route";

const Home = async () => {

  const session = await auth();
  console.log(session);
  return (
  <>
    <h1 className=" font-bold text-primary-500">
      Welcome to the world of Next.js
    </h1>
    <form className="px-10 pt-[100px]" action={async () => {
      "use server";
      await signOut({redirectTo: ROUTES.SIGN_IN});
    }}>
      <button type="submit">Log out</button>
    </form>
    
  </>
);
}

export default Home;
