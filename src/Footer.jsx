
const Footer = () => {
  const today = new Date();
  return (
      <footer className="Footer">
        <h1> {today.getFullYear()}</h1>
      </footer>
  )
}

export default Footer