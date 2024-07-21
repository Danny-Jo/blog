interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return <main className="main-container container">{children}</main>;
};

export default MainContainer;
