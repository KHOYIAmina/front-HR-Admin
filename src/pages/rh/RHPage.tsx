import React from "react";
import Layout from "../../layouts/Layout";
import DropdownRH from "../../components/dropdown/dropdownRH";
import TableComponent from "../../components/table";
import { AddRHInput } from "../../constants/constants";

const RHPage = () => {
  return (
    <Layout>
      <div className=" ml-72 mr-4 mt-32">
      <TableComponent
          buttonName="Ajouter RH"
          title="Ajouter nouveau RH"
          inputBodyList={AddRHInput}
          actionName="Ajouter"
          dropdownComponent={() => <DropdownRH />}
        />
      </div>
    </Layout>
  );
};

export default RHPage;
