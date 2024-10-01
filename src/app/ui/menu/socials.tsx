import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import styles from "./socials.module.css";

interface SocialInterface {
  name: string;
  icon: IconDefinition;
  href: string;
  dataCy: string;
}

const socialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/ennox/",
    dataCy: "socials-linkedin",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/ennox-web",
    dataCy: "socials-github",
  },
];

function Social({ link }: { link: SocialInterface }) {
  return (
    <Link
      key={link.name}
      href={link.href}
      target="_blank"
      data-cy={link.dataCy}
    >
      <FontAwesomeIcon className={styles.icon} icon={link.icon} />
    </Link>
  );
}

export default function Socials() {
  return (
    <>
      {socialLinks.map((link) => {
        return Social({ link });
      })}
    </>
  );
}
