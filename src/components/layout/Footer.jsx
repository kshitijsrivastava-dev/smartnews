function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer__mark">SmartNews</p>
      <p>
        A portfolio news aggregator. Original reporting belongs to the
        publishers linked from each article.
      </p>
      <p className="site-footer__copy">© {year} SmartNews</p>
    </footer>
  )
}

export default Footer
