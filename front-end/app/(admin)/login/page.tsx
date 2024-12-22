import type { Metadata } from "next";
import styles from "./scss/page.module.scss";

import Holder from "./components/holder";
import Header from "@/app/components/header";
import Input from "@/app/components/input";

export const metadata: Metadata = {
  title: "Login | Item Locator",
  description: "Login to access the admin dashboard.",
};

export default function Page() {
  return (
    <main id={styles.container}>
      <Holder>
        <Header title={"Welcome Back"} hFontSize={"2rem"}/>
        <Input htmlFor={"username"} type={"text"} id={"username"} name={"username"} placeholder={"Username"}/>
      </Holder>
    </main>
  )
  
}