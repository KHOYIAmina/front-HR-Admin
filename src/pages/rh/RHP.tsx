import React from "react";
import Layout from "../../layouts/Layout";
import App from "../../components/table";

const RHP = () => {
  return (
    <Layout>
      <div className=" ml-72 mr-4 mt-32">
        <App />
        <App />
        <App />
      </div>
    </Layout>
  );
};

export default RHP;
