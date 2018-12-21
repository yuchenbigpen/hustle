import React from "react";
const styles = { backgroundColor: "#000000" };
export default () => {
  return (
    <footer
      className="text-white mt-5 p-3 text-center navbar fixed-bottom"
      style={styles}
    >
      Copyright &copy; {new Date().getFullYear()} Hustle <br />
      <span>
        Inspired by{" "}
        <a href="https://twitter.com/traversymedia">TraversyMedia</a>
      </span>
    </footer>
  );
};
