import logoPath from '../../images/mesto-logo.svg';

function MestoLogo() {
  return (
    <img
      className="header__logo"
      src={logoPath}
      alt="Место"
      />
  )
}

export default MestoLogo;