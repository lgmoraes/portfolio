import styles from '../legal.module.css';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <h1 className={styles.pageTitle}>Politique de confidentialité</h1>

      <section className={styles.section}>
        <h2>Données collectées</h2>
        <p>
          Les seules données personnelles collectées sur ce site sont celles que
          vous nous transmettez volontairement via notre formulaire de contact.
          Ces données se limitent à votre adresse email et les informations que
          vous choisissez d'inclure dans votre message.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Finalité du traitement</h2>
        <p>
          Ces données sont collectées dans le seul but de répondre à vos
          demandes de contact.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Destinataires des données</h2>
        <p>
          Les messages envoyés via le formulaire de contact sont transmis
          directement à l'adresse email professionnelle du psychologue.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Vos droits</h2>
        <p>
          Conformément à la réglementation en vigueur, vous disposez des droits
          suivants concernant vos données personnelles :
        </p>
        <ul>
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit d'effacement</li>
          <li>Droit d'opposition</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
        </ul>

        <p>
          Pour exercer ces droits ou pour toute question relative au traitement
          de vos données, vous pouvez nous contacter via le formulaire de
          contact.
        </p>
      </section>
    </>
  );
}
