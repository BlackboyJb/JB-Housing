import "@/assets/styles/globals.css";

export const metadata = {
  title: "JB Housing",
  keywords: "House Rent Air BnB, Buy House",
  description:
    "Get a Air BNB in any city you are or Rent a House in any city or Better still Buy and Own a House ",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
