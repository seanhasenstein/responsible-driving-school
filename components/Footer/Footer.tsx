import Image from 'next/image';

import styles from './Footer.module.css';

type Props = {
  handleContactUsClick: () => void;
};

export default function Footer({ handleContactUsClick }: Props) {
  const handleGetStartedClick = () => {
    const getStartedSection = document.getElementById('getStarted');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contactCta}>
        <h4 className={styles.title}>Do you still have questions?</h4>
        <div className={styles.description}>
          Please, don't hesitate to{' '}
          <button type="button" onClick={handleContactUsClick} className={styles.contactBtn}>
            contact us
          </button>
          .
        </div>
      </div>
      <div className={styles.nav}>
        <a
          href="https://auth.drivingschoolgm.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Ddriving-school-gm-web%26redirect_uri%3Dhttps%253A%252F%252Fapp.drivingschoolgm.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520driving-school-gm-api%2520offline_access%26code_challenge%3DDTrmGFTtXiCSE1j-TsR8rZAi7LWKjQzhZymUUBQVcwA%26code_challenge_method%3DS256%26nonce%3D638736042530365779.NDk4ODRlNWQtZTZmNi00YTJiLThhMTUtYWE4MDg5OTBiMjc4N2EzM2RkZjktNzgxZC00NzkzLTk3NjEtNzk2NDI1NTE2ZWEz%26appid%3Dresponsible-driving-school%26state%3DCfDJ8PkO8aR4uFBLraKvUfa8OCJzADcxSBiVh6kX7pXPPKlpI_NBb0VPl6xTlCYVpI7TrWhPSMe6PaFemfhN2pDyQVO2boC_Uvt6AlPL0hg594k0ox7DtQCQl0a0hIlOlP_ao1ithDRXwSs37eacmZ3BhI_Z9XcDXK0qH0sAa92DiDt77yThLPNKfxIMepDcILfDxl5rA7jyJOMspp0ffXvDNyHBkxrJqBGLyg2HY4TADI0K4hp1tpPl1IzOCaPz2XYhDF_Fa2RmR1QoqJ9Lx0jSdlo27cNWz8CZDyU-TGB8-d136GLabaNK5VSqUSzg6GPQ_9rkXSBVRESxN_nwlRPD0QKANBaMBLSQOa0T2F_vJrnuxmfKHDQ5j_W09QZs84SnGuq6OFFuPrL03tiJY4VNTDPxLgY98FAjwG6LOuPz1Bv0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButtonLink}
        >
          Login
        </a>
        <button type="button" onClick={handleGetStartedClick} className={styles.primaryButtonLink}>
          Get started
        </button>
      </div>
      <Image
        src="/logo.webp"
        height={181}
        width={98}
        alt="Responsible Drving School LLC"
        className={styles.logo}
      />
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Responsible Driving LLC.{' '}
      </p>
    </footer>
  );
}
