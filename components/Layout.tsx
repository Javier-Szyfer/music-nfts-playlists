import Header from "./Header";
import { PlayerWrapper } from "./PlayerWrapper";

const Layout = ({ children }: any) => {
  return (
    <div className=" px-0 md:px-14 lg:px-20 h-full w-full min-h-screen max-w-4xl mx-auto">
      <Header />
      {children}
      <PlayerWrapper />
    </div>
  );
};

export default Layout;
