import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <div >
          {children} 
        </div>
      </Header>
    </div>
  );
};

export default Layout;