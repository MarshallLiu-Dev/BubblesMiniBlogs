import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Copyright &copy; 2023 Bubbles Mini Blog  | TODOS OS DIREITOS RESERVADOS</p>
        </footer>
    );
};

export default Footer;