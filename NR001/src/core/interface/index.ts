import { NavigationProp } from "@react-navigation/native";

export interface IUser{
id: string,
username: string,
password: string,
createAt?: string,
updateAt?: string,
};

export interface INotes{
    id: string,
    title: string,
    text: string,
    createAt?: string,
    updateAt?: string,
}


export interface IProps {
    navigation: NavigationProp<any>;
  }




