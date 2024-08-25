import React from "react";
import Layout from "../../layouts/Layout";
import DropdownEmploye from "../../components/dropdown/dropdownEmploye";
import TableComponent from "../../components/table";
import { AddEmployeSelect, AddRHInput } from "../../constants/constants";

const EmployePage = () => {
  return (
    <Layout>
      <div className=" ml-72 mr-4 mt-32">
        <TableComponent
          buttonName="Ajouter Employee"
          title="Ajouter nouveau Employee"
          inputBodyList={AddRHInput}
          selectBodyList={AddEmployeSelect}
          actionName="Ajouter"
          dropdownComponent={() => <DropdownEmploye />}
        />
      </div>
    </Layout>
  );
};

export default EmployePage;
