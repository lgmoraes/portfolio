import company from '@/data/company.json';
import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Mentions Légales',
};

const ef = '\u00A0';

export default function MentionsLegales() {
  return (
    <>
      <h1 className={styles.pageTitle}>Mentions Légales</h1>

      <section className={styles.section}>
        <p className="text-left text-lg text-slate-500">Éditeur du site</p>
        <p className="font-bold">
          {company.owner}
          <br />
          {company.addresses[0].street}, {company.addresses[0].postalCode}{' '}
          {company.addresses[0].city}
        </p>
      </section>

      <section className={styles.section}>
        <p className="p-0 text-left text-slate-500">Hébergement</p>
        <p className="font-bold">
          Vercel Inc. <br />
          440 N Barranca Avenue #4133 <br />
          Covina, CA 91723 <br />
          États-Unis
        </p>
      </section>
    </>
  );
}
