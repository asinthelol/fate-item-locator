import styles from "../scss/holder.module.scss";

export default function Holder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id={styles.holder}>
      {children}
    </section>
  )
}