// Layout.jsx
const Layout = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1> {/* slot:title */}
      <main>{children}</main> {/* default slot */}
    </div>
  );
};

export default Layout;
