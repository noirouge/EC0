import { NavigationProp } from "@react-navigation/native";

export interface IUser{
id: string,
username: string,
password: string,
createAt?: Date,
updateAt?: Date,
};

export interface INotes{
    id: string,
    title: string,
    text: string,
    userId: string,
    createAt?: Date,
    updateAt?: Date,
}


export interface IProps {
    navigation: NavigationProp<any>;
  }




