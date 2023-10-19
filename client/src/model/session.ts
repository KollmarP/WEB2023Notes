/* B"H
*/
import { reactive } from "vue";
import { type User, getUserByEmail } from "./users"

const session = reactive({
  user: null as User | null,
  redirect
})

export interface User {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    role: "admin" | "user",
    token?: string
}

export function getSession(){
  return session;
}

export function login(email: string, password: string): User | null{
    const user = getUserByEmail(email);
    if(user && user.password === password){
        session.user = user;
        return user;
    }
    return null;
  /*session.user = {
    firstName: "Test",
    lastName: "User",
    email: "test@user.com",
    role: "admin"
  }*/
}

export function logout(){
    session.user = null;
}
