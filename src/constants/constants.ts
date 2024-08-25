import { HomeIcon, UsersIcon } from "@heroicons/react/24/solid";

export const AUTHIMAGES = {
  PATTERN: "/img/auth/loginAdmin.png",
};

export enum RouterPathEnum {
  Dashboard = "/",
  RHS = "/employes/rh",
  Employe = "/employes/employe",
  Employees = "/employes",
  Département = "/Département",
  SIGNIN = "/SignIn",
}

export type modalPlacementDialog =
  | "center"
  | "auto"
  | "top"
  | "top-center"
  | "bottom"
  | "bottom-center";

export type backdropType = "opaque" | "blur" | "transparent";

export type ColorKey =
  | "white"
  | "light"
  | "contrast"
  | "success"
  | "danger"
  | "warning"
  | "info";

export const AddRHInput = [
  {
    autoFocus: true,
    label: "Nom",
    placeholder: "Veuillez saisir le nom ",
  },
  {
    autoFocus: false,
    label: "Prénom",
    placeholder: "Veuillez saisir le prénom ",
  },
  {
    autoFocus: false,
    label: "Identifiant",
    placeholder: "Veuillez saisir le CIN ou Passport",
  },
  {
    autoFocus: false,
    label: "Email",
    placeholder: "Veuillez saisir l'email ",
  },
  {
    autoFocus: false,
    label: "Adresse",
    placeholder: "Veuillez saisir l'adresse ",
  },
];

export const AddEmployeSelect = [
  {
    label: "Département",
    placeholder: "Veuillez saisir la département",
    items:['depart1','depart2']
  },
  {
    label: "Poste",
    placeholder: "Veuillez saisir le poste",
    items:['poste1','poste1']
  },
];

export const navbarItems = [
  {
    item: "Dashboard",
    Icon: HomeIcon,
    itemLink: RouterPathEnum.Dashboard,
    listSubtitles: [],
  },
  {
    item: "RHS",
    Icon: UsersIcon,
    itemLink: "",
    listSubtitles: [
      { name: "RHs", path: RouterPathEnum.RHS },
      { name: "Employe", path: RouterPathEnum.Employe },
    ],
  },
  {
    item: "Employees",
    Icon: UsersIcon,
    itemLink: RouterPathEnum.Employees,
    listSubtitles: [],
  },
];

export interface RHPropsModel {
  buttonName: string;
  title: string;
  selectTitle?: string;
  inputBodyList: Array<EmployesInputbodyModel>;
  selectBodyList?: Array<EmployesSelectbodyModel>;
  actionName: string;
}

export interface tableProps extends RHPropsModel {
  dropdownComponent: () => JSX.Element;
}

export interface EmployesInputbodyModel {
  autoFocus: boolean;
  label: string;
  placeholder: string;
}

export interface EmployesSelectbodyModel {
  label: string;
  placeholder: string;
  items: Array<string>
}

export const defaultImage = "/img/defaultImage.png";
