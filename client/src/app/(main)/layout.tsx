import DashboardWrapper from "../dashboardWrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
